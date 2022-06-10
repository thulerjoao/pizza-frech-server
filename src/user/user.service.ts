import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'utils/handle-error.utils';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma:PrismaService){}

  private userSelect = {
    id: true,
    nickname: true,
    name: true,
    password: false,
    image: true,
    createdAt: true,
    updatedAt: true
  } // apenas para o password não retornar na requisição

  async create(dto: CreateUserDto):Promise<User> {
    if(dto.password != dto.confirmPassword){
      throw new BadRequestException('As senhas devem ser iguais')
    }
    delete dto.confirmPassword;

    const data:User = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
    };
    return this.prisma.user.create({
      data,
      select: this.userSelect
    }).catch(handleError);
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

    if(!dto.password){
      if(dto.password != dto.confirmPassword){
        throw new BadRequestException('As senhas devem ser iguais')
      }
    }
    delete dto.confirmPassword;

    const data: Partial<User> = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
      
    }
    return this.prisma.user.update({
      data,
      where:{id},
      select: this.userSelect
    }).catch(handleError);
  }

  async remove(id: string) {
    await this.findById(id)
    return this.prisma.user.delete({where:{id}});
  }
}
