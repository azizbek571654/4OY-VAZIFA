import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import { Raiting } from '../../common/enum';
import { FoodRaiting } from '../../food-raiting/model/food-raiting.model';
import { Category } from '../../category/model/category.model';
import { CreateMenuDto } from '../dto/create-menu.dto';
import { Restarant } from '../../restarant/model/restarant.model';
import { Basket } from '../../basket/model/basket.model';

@Table({ tableName: 'menus', timestamps: false })
export class Menu extends Model<Menu, CreateMenuDto> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare description: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  declare price: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  declare category_id: number;
  @BelongsTo(() => Category, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  category: Category;

  @ForeignKey(() => Restarant)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  declare resturant_id: number;
  @BelongsTo(() => Restarant, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  restarant: Restarant;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    defaultValue: 0,
  })
  declare count: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare reyting: Raiting;

  @Column({
    type: DataType.BIGINT,
    allowNull: true,
  })
  declare calories: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare image_url: string;

  @HasMany(() => FoodRaiting)
  FoodRaiting?: FoodRaiting;

  @HasMany(() => Basket)
  basket?: Basket;
}
