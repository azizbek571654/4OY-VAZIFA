import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './model/order.model';
import { UserService } from '../users/users.service';
import { BasketService } from '../basket/basket.service';
import { ResturantTableService } from '../resturant_tables/resturant_tables.service';
import { OrderStatus } from '../common/enum';
import { PaymentService } from '../payment/payment.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)
    private readonly ordersModel: typeof Order,
    private readonly userService: UserService,
    private readonly basketService: BasketService,
    private readonly resturantTableService: ResturantTableService,
    @Inject(forwardRef(() => PaymentService))
    private readonly paymentService: PaymentService,
  ) {}
  async create(createOrdersDto: CreateOrderDto) {
    const user = await this.userService.findOneuser(createOrdersDto.user_id);
    if (!user) {
      throw new NotFoundException('user id topilmadi');
    }

    const basket = await this.basketService.findOneBasket(
      createOrdersDto.basket_id,
    );
    if (!basket) {
      throw new NotFoundException('basket id topilmadi');
    }

    const table = await this.resturantTableService.findOneResturantTables(
      createOrdersDto.table_id,
    );
    if (!table) {
      throw new NotFoundException('table id topilmadi');
    }

    const payid = await this.paymentService.findOnePayment(
      createOrdersDto.user_id,
    );
    if (!payid) {
      throw new NotFoundException('siz hali ovqat uchun tolov qilmagansiz ❌');
    }
    const basketItems = await this.basketService.getUserBasketsWithMenu(
      createOrdersDto.user_id,
    );
    const plainBasketItems = basketItems.map((item) => item.toJSON());
    
    if (!basketItems || basketItems.length === 0) {
      throw new NotFoundException('basket bosh');
    }

    let totalPrice = 0;
    for (const item of plainBasketItems) {
      console.log('✅ Menu name:', item.menu?.name);
      totalPrice += item.menu.price * item.count;
    }
    createOrdersDto.total_prise = totalPrice;
    createOrdersDto.is_paid = true;
    const order = await this.ordersModel.create(createOrdersDto);

    setTimeout(async () => {
      await this.ordersModel.update(
        { name: OrderStatus.PREPARING },
        { where: { id: order.id } },
      );
      console.log(`Order ${order.id} now PREPARING`);
    }, 10000);

    setTimeout(async () => {
      await this.ordersModel.update(
        { name: OrderStatus.READY },
        { where: { id: order.id } },
      );
      console.log(`Order ${order.id} now READY`);
    }, 35000);

    return order;
  }

  findAll() {
    return this.ordersModel.findAll({ include: { all: true } });
  }

  findOneOrders(id: number) {
    return this.ordersModel.findByPk(id);
  }

  async update(id: number, updateOrdersDto: UpdateOrderDto) {
    const Orders = await this.ordersModel.update(updateOrdersDto, {
      where: { id },
      returning: true,
    });
    return Orders[1][0];
  }

  async remove(id: number) {
    const result = await this.ordersModel.destroy({ where: { id } });
    if (result > 0) {
      return `${id} - Orders o'chirildi`;
    }

    return `${id}- Orders  yo'q`;
  }
}
