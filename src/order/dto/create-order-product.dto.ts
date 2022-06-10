import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateOrderProductDto{
    @IsString()
    @ApiProperty({
        description:'Id do produto',
        example: "dasdas-5-das454da0456asd-das"
    })
    productId: string;
    
    @IsNumber()
    @ApiProperty({
        description:'Quantidade de produtos',
        example: 3
    })
    quantity: number;

    @IsString()
    @ApiProperty({
        description:'Observações do produto',
        example: "Sem cebola"
    })
    description: string;
}
