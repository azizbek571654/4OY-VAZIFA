import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductReweiwsService } from './product-reweiws.service';
import { CreateProductReweiwDto } from './dto/create-product-reweiw.dto';
import { UpdateProductReweiwDto } from './dto/update-product-reweiw.dto';

@Controller('product-reweiws')
export class ProductReweiwsController {
  constructor(private readonly productReweiwsService: ProductReweiwsService) {}

  @Post()
  create(@Body() createProductReweiwDto: CreateProductReweiwDto) {
    return this.productReweiwsService.create(createProductReweiwDto);
  }

  @Get()
  findAll() {
    return this.productReweiwsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productReweiwsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductReweiwDto: UpdateProductReweiwDto,
  ) {
    return this.productReweiwsService.update(+id, updateProductReweiwDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productReweiwsService.remove(+id);
  }
}
