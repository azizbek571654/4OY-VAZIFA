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
import { Order } from '../../orders/model/order.model';
import { CreateBasketDto } from '../dto/create-basket.dto';
import { User } from '../../users/model/user.model';
import { Menu } from '../../menus/model/menu.model';

@Table({ tableName: 'Baskets', timestamps: false })
export class Basket extends Model<Basket, CreateBasketDto> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  declare user_id: number;
  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @ForeignKey(() => Menu)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  declare food_id: number;
  @BelongsTo(() => Menu, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  menu: Menu;

  @Column({
    type: DataType.BIGINT,
    allowNull: true,
  })
  declare count: number;

  @HasMany(() => Order)
  order?: Order;
}
