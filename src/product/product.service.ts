import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'utils/handle-error.utils';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService){}

  async create(dto: CreateProductDto): Promise<Product>{
    const data: Product = {...dto};
    return this.prisma.product.create({data}).catch(handleError);
  }

  findAll():Promise<Product[]> {
    return this.prisma.product.findMany();
  }


  async findbyId(id: string): Promise<Product> {
    const record = await this.prisma.product.findUnique({where:{id}});
    if(!record){
      throw new NotFoundException('Id inválido');
    }
    return record
  }

  async findOne(id:string): Promise<Product>{
    return await this.findbyId(id)
  }

  async update(id: string, dto: UpdateProductDto) {
    await this.findbyId(id)
    const data: Partial<Product> = {...dto};
    return this.prisma.product.update({data, where:{id}});
  }

  async remove(id: string) {
    await this.findbyId(id)
    return `This action removes a #${id} product`;
  }
}
