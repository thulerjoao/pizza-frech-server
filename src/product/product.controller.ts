import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('product')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({summary:'Cadastrar um novo produto'})
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get()
  @ApiOperation({summary:'Buscar todos os produtos'})
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary:'Buscar um produto pelo id'})
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({summary:'Atualizar um produto pelo id'})
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({summary:'Excluir um produto pelo id'})
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
