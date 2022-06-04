import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome de usuário',
    example: 'thulerjoao',
  })
  nickname: string;

  @IsString()
  @ApiProperty({
    description: 'Nome pessoal',
    example: 'João Pedro',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Senha de usuário',
    example: 'Casa1234@',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'Imagem de usuário',
    example: 'http://imagem-do-usuario',
  })
  image: string;
}
