import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductImegsService } from './product-imegs.service';
import { CreateProductImegDto } from './dto/create-product-imeg.dto';
import { UpdateProductImegDto } from './dto/update-product-imeg.dto';

@Controller('product-imegs')
export class ProductImegsController {
  constructor(private readonly productImegsService: ProductImegsService) {}

  @Post()
  create(@Body() createProductImegDto: CreateProductImegDto) {
    return this.productImegsService.create(createProductImegDto);
  }

  @Get()
  findAll() {
    return this.productImegsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productImegsService.findOneProductIMG(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductImegDto: UpdateProductImegDto,
  ) {
    return this.productImegsService.update(+id, updateProductImegDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productImegsService.remove(+id);
  }
}
