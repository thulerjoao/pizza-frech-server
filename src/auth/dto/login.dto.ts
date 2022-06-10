import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class LoginDto{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description:'Login de usuário',
        example:'thulerjoao'
    })
    nickName: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description:'Senha do usuário',
        example:'Casa1234@'
    })
    password: string
}

