import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './model/basket.model';
import { UserService } from '../users/users.service';
import { MenuService } from '../menus/menus.service';
import { Menu } from '../menus/model/menu.model';

@Injectable()
export class BasketService {
  constructor(
    @InjectModel(Basket)
    private readonly basketModel: typeof Basket,
    private readonly userService: UserService,
    private readonly menuService: MenuService,
  ) {}
  async create(createBasketDto: CreateBasketDto) {
    const user = await this.userService.findOneuser(createBasketDto.user_id);
    if (!user) {
      throw new NotFoundException('user id topilmadi');
    }

    const food = await this.menuService.findOneMenu(createBasketDto.food_id);
    if (!food) {
      throw new NotFoundException('food id topilmadi');
    }
    return this.basketModel.create(createBasketDto);
  }

  findAll() {
    return this.basketModel.findAll({ include: { all: true } });
  }

  findOneBasket(id: number) {
    return this.basketModel.findByPk(id);
  }

  async update(id: number, updateBasketDto: UpdateBasketDto) {
    const Basket = await this.basketModel.update(updateBasketDto, {
      where: { id },
      returning: true,
    });
    return Basket[1][0];
  }

  async remove(id: number) {
    const result = await this.basketModel.destroy({ where: { id } });
    if (result > 0) {
      return `${id} - Basket o'chirildi`;
    }

    return `${id}- Basket  yo'q`;
  }

  // basket.service.ts
  async getUserBasketsWithMenu(userId: number) {
    return this.basketModel.findAll({
      where: { user_id: userId },
      include: [{ model: Menu, as: 'menu' }], // bu yer muhim
      raw:false
    });
  }
}
