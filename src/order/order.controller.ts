import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({summary:'Criar novo pedido'})
  create(@Body() dto: CreateOrderDto) {
    return this.orderService.create(dto);
  }

  @Get()
  @ApiOperation({summary:'Buscar todos os pedidos'})
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary:'Buscar pedido pelo id'})
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }
}