import { Module } from '@nestjs/common';
import { ProductImegsService } from './product-imegs.service';
import { ProductImegsController } from './product-imegs.controller';
import { Product } from '../product/model/product.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductImeg } from './model/product-imeg.model';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [SequelizeModule.forFeature([Product, ProductImeg]), ProductModule],
  controllers: [ProductImegsController],
  providers: [ProductImegsService],
  exports: [ProductImegsService],
})
export class ProductImegsModule {}
