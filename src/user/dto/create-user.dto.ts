import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches } from 'class-validator';

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
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha de usuário',
    example: 'Casa1234@',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'confirmação da senha de usuário',
    example: 'Casa1234@',
  })
  confirmPassword: string;

  @IsString()
  @ApiProperty({
    description: 'Imagem de usuário',
    example: 'http://imagem-do-usuario',
  })
  image: string;
}
