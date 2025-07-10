import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BasketService } from './basket.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { SelfGuart } from '../common/guards/self.guard';
import { JwtAuthGuard } from '../common/guards/jwt.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @ApiBearerAuth('token')
  @Roles('superadmin', 'admin')
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createBasketDto: CreateBasketDto) {
    return this.basketService.create(createBasketDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.basketService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @UseGuards(SelfGuart)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basketService.findOneBasket(+id);
  }

  @UseGuards(JwtAuthGuard)
  @UseGuards(SelfGuart)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBasketDto: UpdateBasketDto) {
    return this.basketService.update(+id, updateBasketDto);
  }

  @UseGuards(JwtAuthGuard)
  @UseGuards(SelfGuart)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basketService.remove(+id);
  }
}
