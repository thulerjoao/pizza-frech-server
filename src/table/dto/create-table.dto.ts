import { ApiProperty } from "@nestjs/swagger";
import { IsPositive } from "class-validator";
import { isNumberObject } from "util/types";

export class CreateTableDto {
    @IsPositive()
    @ApiProperty({description: 'Número da mesa', example: 1})
    number: number
}
