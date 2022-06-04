import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Pizza de Mussarela',
  })
  name: string;

  @IsNumber()
  @ApiProperty({
    description: 'Valor da pizza',
    example: 39.9,
  })
  price: number;

  @IsString()
  @ApiProperty({
    description: 'Descrição do sabor',
    example: 'Pizza de mussarela com calabresa',
  })
  description: string;

  @IsString()
  @ApiProperty({
    description: 'Imagem do produto',
    example: 'http://foto-da-pizza',
  })
  image: string;
}
