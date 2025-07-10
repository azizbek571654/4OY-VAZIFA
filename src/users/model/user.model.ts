import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { CreateUserDto } from '../dto/create-user.dto';
import { Gender, Roles } from '../../common/enum';
import { FoodRaiting } from '../../food-raiting/model/food-raiting.model';
import { Order } from '../../orders/model/order.model';
import { Notification } from '../../notification/model/notification.model';
import { Language } from '../../language/model/language.model';
import { Basket } from '../../basket/model/basket.model';
import { Restarant } from '../../restarant/model/restarant.model';
import { Payment } from '../../payment/model/payment.model';

@Table({ tableName: 'user', timestamps: false })
export class User extends Model<User, CreateUserDto> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    // unique: true,
  })
  declare phone: string;

  @Column({
    type: DataType.ENUM(Gender.MALE, Gender.FIMALE),
    allowNull: false,
    // unique: true,
  })
  declare gender: Gender;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare age: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  declare is_active: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  declare is_banned: boolean;

  @Column({ type: DataType.DATE, allowNull: true })
  banned_until: Date;

  @Column({
    type: DataType.ENUM(
      Roles.SUPERADMIN,
      Roles.ADMIN,
      Roles.SELLER,
      Roles.CUSTOMER,
      Roles.MANAGER,
    ),
    allowNull: false,
    defaultValue: Roles.CUSTOMER,
  })
  declare role: Roles;

  @ForeignKey(() => Language)
  @Column({
    type: DataType.BIGINT,
    allowNull: true,
  })
  declare language_id: number;
  @BelongsTo(() => Language, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  language: Language;

  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare activation_link: string;

  @Column({
    type: DataType.STRING(2000),
  })
  declare refresh_token: string;

  @HasMany(() => FoodRaiting)
  foodRaiting?: FoodRaiting;

  @HasMany(() => Order)
  order?: Order;

  @HasMany(() => Notification)
  notification?: Notification;

  @HasMany(() => Basket)
  basket?: Basket;

  @HasMany(() => Restarant)
  restarant?: Restarant;

  @HasMany(() => Payment)
  payment?: Payment;
}
