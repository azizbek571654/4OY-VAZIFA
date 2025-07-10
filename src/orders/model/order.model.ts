import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { OrderStatus } from '../../common/enum';
import { Payment } from '../../payment/model/payment.model';
import { User } from '../../users/model/user.model';
import { Basket } from '../../basket/model/basket.model';
import { ResturantTable } from '../../resturant_tables/model/resturant_table.model';
import { CreateOrderDto } from '../dto/create-order.dto'; // DTO ni albatta import qiling

@Table({ tableName: 'Order', timestamps: false })
export class Order extends Model<Order, CreateOrderDto> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  user_id: number;

  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @ForeignKey(() => Basket)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  basket_id: number;

  @BelongsTo(() => Basket, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  basket: Basket;

  @ForeignKey(() => ResturantTable)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  table_id: number;

  @BelongsTo(() => ResturantTable, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  resturantTable: ResturantTable;

  @Column({
    type: DataType.ENUM(
      OrderStatus.CANCELED,
      OrderStatus.PENDING,
      OrderStatus.PREPARING,
      OrderStatus.READY,
    ),
    allowNull: false,
    defaultValue: OrderStatus.PENDING,
  })
  name: OrderStatus;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  total_prise: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_paid: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  note: string;

  @HasMany(() => Payment)
  payment: Payment[];
}
