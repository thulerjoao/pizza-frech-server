import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { TableService } from './table.service';

@ApiTags('table')
@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Post()
  @ApiOperation({summary:'Criar nova mesa'})
  create(@Body() dto: CreateTableDto) {
    return this.tableService.create(dto);
  }

  @Get()
  @ApiOperation({summary:'Buscar todas as mesas'})
  findAll() {
    return this.tableService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary:'Buscar mesa pelo id'})
  findOne(@Param('id') id: string) {
    return this.tableService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({summary:'Editar mesa pelo id'})
  update(@Param('id') id: string, @Body() dto: UpdateTableDto) {
    return this.tableService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({summary:'Deletar mesa pelo id'})
  remove(@Param('id') id: string) {
    return this.tableService.remove(id);
  }
}
