import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProductImegDto } from './dto/create-product-imeg.dto';
import { UpdateProductImegDto } from './dto/update-product-imeg.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ProductImeg } from './model/product-imeg.model';
import { ProductService } from '../product/product.service';

@Injectable()
export class ProductImegsService {
  constructor(
    @InjectModel(ProductImeg)
    private readonly productImegsModel: typeof ProductImeg,
    private readonly productservise: ProductService,
  ) {}
  async create(createProductImegDto: CreateProductImegDto) {
    try {
      const product = await this.productservise.findOnePRODUCT(
        createProductImegDto.product_id,
      );
      if (!product) {
        throw new HttpException(
          {
            success: false,
            message: 'product topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      const newProduct =
        await this.productImegsModel.create(createProductImegDto);
      return {
        success: true,
        message: 'Product-IMG yaratildi',
        data: newProduct,
      };
    } catch (error) {
      console.error(error);
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          success: false,
          message: 'Product-IMG yaratilmadi',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const productsIMG = await this.productImegsModel.findAll();
      return {
        success: true,
        message: 'Barcha productImegs',
        count: productsIMG.length,
        data: productsIMG,
      };
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: 'productImegs topilmadi',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOneProductIMG(id: number) {
    try {
      const product = await this.productImegsModel.findByPk(id);
      if (!product) {
        throw new HttpException(
          {
            success: false,
            message: 'productIMG topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      return {
        success: true,
        message: 'productIMG topildi',
        data: product,
      };
    } catch (error) {
      console.error(error);
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'productIMG ni olishda xatolik',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }

  async update(id: number, updateProductImegDto: UpdateProductImegDto) {
    try {
      const productIMG = await this.productImegsModel.findByPk(id);
      if (!productIMG) {
        throw new HttpException(
          {
            success: false,
            message: 'productIMG topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      const updated = await productIMG.update(updateProductImegDto);
      return {
        success: true,
        message: 'productIMG yangilandi',
        data: updated,
      };
    } catch (error) {
      console.error(error);
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'productIMG yangilanmadi',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }

  async remove(id: number) {
    try {
      const product = await this.productImegsModel.findByPk(id);
      if (!product) {
        throw new HttpException(
          {
            success: false,
            message: 'product IMEGS topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      await product.destroy();
      return {
        success: true,
        message: 'product IMEGS ochirildi',
      };
    } catch (error) {
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'product IMEGSni ochirishda xatolik',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }
}
