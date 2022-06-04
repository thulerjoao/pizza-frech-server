import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'utils/handle-error.utils';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma:PrismaService){}

  async create(dto: CreateUserDto):Promise<User> {
    const data:User = {...dto};
    return this.prisma.user.create({data}).catch(handleError);
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findById(id:string){
    const record = await this.prisma.user.findUnique({where:{id}})
    if(!record){
      throw new NotFoundException('Id não encontrado')
    }
    return record;
  }

  async findOne(id: string) {
    return await this.findById(id);
  }

  async update(id: string, dto: UpdateUserDto) {
    await this.findById(id)
    const data: Partial<User> = {...dto}
    return this.prisma.user.update({data, where:{id}});
  }

  async remove(id: string) {
    await this.findById(id)
    return this.prisma.user.delete({where:{id}});
  }
}
