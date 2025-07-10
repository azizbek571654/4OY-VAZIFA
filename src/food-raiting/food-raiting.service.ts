import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFoodRaitingDto } from './dto/create-food-raiting.dto';
import { UpdateFoodRaitingDto } from './dto/update-food-raiting.dto';
import { InjectModel } from '@nestjs/sequelize';
import { FoodRaiting } from './model/food-raiting.model';
import { UserService } from '../users/users.service';
import { MenuService } from '../menus/menus.service';
import { Sequelize } from 'sequelize-typescript';
import { QueryTypes } from 'sequelize';


@Injectable()
export class FoodRaitingService {
  constructor(
    @InjectModel(FoodRaiting)
    private readonly foodRaitingModel: typeof FoodRaiting,
    private readonly userService: UserService,
    private readonly menuService: MenuService,
    private readonly sequelize: Sequelize,
  ) {}
  async create(createFoodRaitingDto: CreateFoodRaitingDto) {
    const user = await this.userService.findOneuser(
      createFoodRaitingDto.user_id,
    );
    if (!user) {
      throw new NotFoundException('user id topilmadi');
    }

    const food = await this.menuService.findOneMenu(
      createFoodRaitingDto.food_id,
    );
    if (!food) {
      throw new NotFoundException('menu id topilmadi');
    }
    return this.foodRaitingModel.create(createFoodRaitingDto);
  }

  findAll() {
    return this.foodRaitingModel.findAll({ include: { all: true } });
  }

  findOneFoodRaiting(id: number) {
    return this.foodRaitingModel.findByPk(id);
  }

  async getAgeStatisticsByFoodId(foodId: number) {
    const [result] = await this.sequelize.query(
      `
      SELECT
        SUM(CASE WHEN u.age BETWEEN 0 AND 18 THEN 1 ELSE 0 END) AS "yoshlar",
        SUM(CASE WHEN u.age BETWEEN 19 AND 25 THEN 1 ELSE 0 END) AS "osmirlar",
        SUM(CASE WHEN u.age BETWEEN 26 AND 80 THEN 1 ELSE 0 END) AS "kattalar"
      FROM "FoodRaiting" fr
      JOIN "user" u ON u.id = fr.user_id
      WHERE fr.food_id = :foodId
      `,
      {
        replacements: { foodId },
        type: QueryTypes.SELECT,
      },
    );

    return result;
  }

  async getGenderRatingStats(foodId: number) {
    const [result] = await this.sequelize.query(
      `
    SELECT
      SUM(CASE WHEN u.gender = 'male' THEN 1 ELSE 0 END) AS male,
      SUM(CASE WHEN u.gender = 'fimale' THEN 1 ELSE 0 END) AS fimale
    FROM "FoodRaiting" fr
    JOIN "user" u ON u.id = fr.user_id
    WHERE fr.food_id = :foodId
    `,
      {
        replacements: { foodId },
        type: QueryTypes.SELECT,
      },
    );

    return result;
  }

  async getTopRatedMenus() {
    return this.foodRaitingModel.findAll({
      attributes: [
        'food_id',
        [
          this.sequelize.fn('AVG', this.sequelize.col('FoodRaiting')),
          'avg_rating',
        ],
        [this.sequelize.fn('COUNT', this.sequelize.col('id')), 'rating_count'],
      ],
      group: ['food_id'],
      order: [
        [this.sequelize.fn('AVG', this.sequelize.col('FoodRaiting')), 'DESC'],
      ],
      limit: 100,
    });
  }

  async update(id: number, updateFoodRaitingDto: UpdateFoodRaitingDto) {
    const FoodRaiting = await this.foodRaitingModel.update(
      updateFoodRaitingDto,
      {
        where: { id },
        returning: true,
      },
    );
    return FoodRaiting[1][0];
  }

  async remove(id: number) {
    const result = await this.foodRaitingModel.destroy({ where: { id } });
    if (result > 0) {
      return `${id} - FoodRaiting o'chirildi`;
    }

    return `${id}- FoodRaiting  yo'q`;
  }
}
