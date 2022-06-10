import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'utils/handle-error.utils';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';



@Injectable()
export class TableService {

  constructor(private readonly prisma: PrismaService){}

  async create(dto: CreateTableDto): Promise<Table>{
    const data: Table = {...dto};
    return this.prisma.table.create({data}).catch(handleError);
  }

  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }

  async findById(id: string): Promise<Table> {
    const record = await this.prisma.table.findUnique({where:{id}});
    if(!record){
      throw new NotFoundException('Id inválido')
    }
    return record;
  }

  async findOne(@Param() id:string): Promise<Table>{
    return this.findById(id);
  }

  async update(id: string, dto: UpdateTableDto):Promise<Table> {
    await this.findById(id) //só serve para fazer a validação de id válido.
    const data: Partial<Table> = {...dto};
    return this.prisma.table.update({data, where:{id}}).catch(handleError);
  }

  async remove(id: string):Promise<Table> {
    await this.findById(id) //só serve para fazer a validação de id válido.
    return this.prisma.table.delete({where:{id}});
  }
}
