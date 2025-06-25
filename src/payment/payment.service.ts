import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Payment } from './model/payment.model';
import { AdminService } from '../admin/admin.service';
import { ProductOrdersService } from '../product-orders/product-orders.service';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment)
    private readonly paymentModel: typeof Payment,
    private readonly AdminServise: AdminService,
    private readonly ProductOrderServise: ProductOrdersService,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    try {
      const admin = await this.AdminServise.findOneADMIN(
        createPaymentDto.user_id,
      );
      if (!admin) {
        throw new HttpException(
          {
            success: false,
            message: 'admin topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      const productORDer = await this.ProductOrderServise.findOneProductORDER(
        createPaymentDto.order_id,
      );
      if (!productORDer) {
        throw new HttpException(
          {
            success: false,
            message: 'productORDer topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      const newpayment = await this.paymentModel.create(createPaymentDto);
      return {
        success: true,
        message: 'payment yaratildi',
        data: newpayment,
      };
    } catch (error) {
      console.error(error);
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        {
          success: false,
          message: 'payment yaratilmadi',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const payments = await this.paymentModel.findAll();
      return {
        success: true,
        message: 'Barcha paymentlar',
        count: payments.length,
        data: payments,
      };
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: 'paymentlar topilmadi',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOnePayment(id: number) {
    try {
      const payment = await this.paymentModel.findByPk(id);
      if (!payment) {
        throw new HttpException(
          {
            success: false,
            message: 'payment topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      return {
        success: true,
        message: 'payment topildi',
        data: payment,
      };
    } catch (error) {
      console.error(error);
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'paymentni olishda xatolik',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    try {
      const payment = await this.paymentModel.findByPk(id);
      if (!payment) {
        throw new HttpException(
          {
            success: false,
            message: 'payment topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      const updated = await payment.update(updatePaymentDto);
      return {
        success: true,
        message: 'payment yangilandi',
        data: updated,
      };
    } catch (error) {
      console.error(error);
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'payment yangilanmadi',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }

  async remove(id: number) {
    try {
      const payment = await this.paymentModel.findByPk(id);
      if (!payment) {
        throw new HttpException(
          {
            success: false,
            message: 'payment topilmadi',
          },
          HttpStatus.NOT_FOUND,
        );
      }

      await payment.destroy();
      return {
        success: true,
        message: 'payment ochirildi',
      };
    } catch (error) {
      throw error instanceof HttpException
        ? error
        : new HttpException(
            {
              success: false,
              message: 'paymentni ochirishda xatolik',
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }
}
