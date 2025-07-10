import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { Payment_type, Status } from '../../common/enum';
import { Order } from '../../orders/model/order.model';
import { User } from '../../users/model/user.model';

@Table({ tableName: 'Payment' })
export class Payment extends Model<Payment, CreatePaymentDto> {
  @Column({
    type: DataType.ENUM(Payment_type.CASH, Payment_type.CARD),
    allowNull: true,
    defaultValue: Payment_type.CARD,
  })
  Payment_type: Payment_type;

  @Column({
    type: DataType.ENUM(Status.PAID, Status.UNPAID),
    allowNull: true,
    defaultValue: Status.UNPAID,
  })
  status: Status;

  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  oeder_id: number;
  @BelongsTo(() => Order, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  order: Order;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;
  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;
}
