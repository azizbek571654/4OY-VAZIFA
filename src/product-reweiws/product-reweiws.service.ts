import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProductReweiwDto } from './dto/create-product-reweiw.dto';
import { UpdateProductReweiwDto } from './dto/update-product-reweiw.dto';
import { InjectModel } from '@nestjs/sequelize';
import { AdminService } from '../admin/admin.service';
import { ProductService } from '../product/product.service';
import { ProductOrdersService } from '../product-orders/product-orders.service';

@Injectable()
export class ProductReweiwsService {
  create(createProductReweiwDto: CreateProductReweiwDto) {
    return 'This action adds a new productReweiw';
  }

  findAll() {
    return `This action returns all productReweiws`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productReweiw`;
  }

  update(id: number, updateProductReweiwDto: UpdateProductReweiwDto) {
    return `This action updates a #${id} productReweiw`;
  }

  remove(id: number) {
    return `This action removes a #${id} productReweiw`;
  }
}
