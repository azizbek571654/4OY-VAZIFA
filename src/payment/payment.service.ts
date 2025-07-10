import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Payment } from './model/payment.model';
import { OrdersService } from '../orders/orders.service';
import { UserService } from '../users/users.service';
import { Order } from '../orders/model/order.model';
import { User } from '../users/model/user.model';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment)
    private readonly paymentModel: typeof Payment,
    @Inject(forwardRef(() => OrdersService))
    private readonly orderService: OrdersService,
    // @Inject(forwardRef(() => User))
    private readonly userService: UserService,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const restarant = await this.orderService.findOneOrders(
      createPaymentDto.oeder_id,
    );
    if (!restarant) {
      throw new NotFoundException('order id topilmadi');
    }

    const user = await this.userService.findOneuser(createPaymentDto.user_id);
    if (!user) {
      throw new NotFoundException('user id topilmadi');
    }
    return this.paymentModel.create(createPaymentDto);
  }

  findAll() {
    return this.paymentModel.findAll({ include: { all: true } });
  }

  findOnePayment(id: number) {
    return this.paymentModel.findByPk(id);
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const Payment = await this.paymentModel.update(updatePaymentDto, {
      where: { id },
      returning: true,
    });
    return Payment[1][0];
  }

  async remove(id: number) {
    const result = await this.paymentModel.destroy({ where: { id } });
    if (result > 0) {
      return `${id} - Payment o'chirildi`;
    }

    return `${id}- Payment  yo'q`;
  }
}
