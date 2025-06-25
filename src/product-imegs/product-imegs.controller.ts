import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ProductImegsService } from './product-imegs.service';
import { CreateProductImegDto } from './dto/create-product-imeg.dto';
import { UpdateProductImegDto } from './dto/update-product-imeg.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('product-imegs')
export class ProductImegsController {
  constructor(private readonly productImegsService: ProductImegsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('img_url'))
  create(
    @Body() createProductImegDto: CreateProductImegDto,
    @UploadedFile() img_url: any,
  ) {
    return this.productImegsService.create(createProductImegDto, img_url);
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
