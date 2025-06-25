import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Admin } from '../../admin/model/admin.model';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { ProductOrder } from '../../product-orders/model/product-order.model';

@Table({ tableName: 'payment' })
export class Payment extends Model<Payment, CreatePaymentDto> {
  @ForeignKey(() => ProductOrder)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  order_id: number;
  @BelongsTo(() => ProductOrder, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  productOrder: ProductOrder;

  @ForeignKey(() => Admin)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;
  @BelongsTo(() => Admin, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  admin: Admin;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  payment_method: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  payed_at: Date;
}
