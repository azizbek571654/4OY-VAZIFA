import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProductOrderDto } from './dto/create-product-order.dto';
import { UpdateProductOrderDto } from './dto/update-product-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ProductOrder } from './model/product-order.model';
import { AdminService } from '../admin/admin.service';
import { ProductService } from '../product/product.service';
import { KurierService } from '../kurier/kurier.service';

@Injectable()
export class ProductOrdersService {
  constructor(
    @InjectModel(ProductOrder)
    private readonly productOrderModule: typeof ProductOrder,
    private readonly adminService: AdminService,
    private readonly ProductServise: ProductService,
    private readonly KurierServise: KurierService,
  ) {}
  async create(createProductOrderDto: CreateProductOrderDto) {
    try {
      const admin = await this.adminService.findOneADMIN(
        createProductOrderDto.buyer_id,
      );
      if (!admin) {
        throw new HttpException(
          {
            success: false,
            message: 'admin id topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      const product = await this.ProductServise.findOnePRODUCT(
        createProductOrderDto.product_id,
      );
      if (!product) {
        throw new HttpException(
          {
            success: false,
            message: 'product id topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      const kurier = await this.KurierServise.findOneKURIER(
        createProductOrderDto.kurier_id,
      );
      if (!kurier) {
        throw new HttpException(
          {
            success: false,
            message: 'kurier id topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      const newProduct = await this.productOrderModule.create(
        createProductOrderDto,
      );
      return {
        success: true,
        message: 'Product Order yaratildi',
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
          message: 'Product Order yaratilmadi',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const productORDERs = await this.productOrderModule.findAll();
      return {
        success: true,
        message: 'Barcha ProductORDERlar',
        count: productORDERs.length,
        data: productORDERs,
      };
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: 'ProductORDERlar topilmadi',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOneProductORDER(id: number) {
    try {
      const productORDR = await this.productOrderModule.findByPk(id);
      if (!productORDR) {
        throw new HttpException(
          {
            success: false,
            message: 'productORDR topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      return {
        success: true,
        message: 'productORDR topildi',
        data: productORDR,
      };
    } catch (error) {
      console.error(error);
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'productni olishda xatolik',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }

  async update(id: number, updateProductOrderDto: UpdateProductOrderDto) {
    try {
      const productORDER = await this.productOrderModule.findByPk(id);
      if (!productORDER) {
        throw new HttpException(
          {
            success: false,
            message: 'productORDER topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      const updated = await productORDER.update(updateProductOrderDto);
      return {
        success: true,
        message: 'productORDER yangilandi',
        data: updated,
      };
    } catch (error) {
      console.error(error);
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'product yangilanmadi',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }

  async remove(id: number) {
    try {
      const product = await this.productOrderModule.findByPk(id);
      if (!product) {
        throw new HttpException(
          {
            success: false,
            message: 'productorder topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      await product.destroy();
      return {
        success: true,
        message: 'productoerder ochirildi',
      };
    } catch (error) {
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'productORDRni ochirishda xatolik',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }
}
