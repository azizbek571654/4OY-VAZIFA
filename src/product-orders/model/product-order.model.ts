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
import { CreateProductOrderDto } from '../dto/create-product-order.dto';
import { Payment } from '../../payment/model/payment.model';
import { Product } from '../../product/model/product.model';
import { Kurier } from '../../kurier/model/kurier.model';
import { Admin } from '../../admin/model/admin.model';
import { ProductReweiw } from '../../product-reweiws/model/product-reweiw.model';

@Table({ tableName: 'product-order' })
export class ProductOrder extends Model<ProductOrder, CreateProductOrderDto> {
  @ForeignKey(() => Payment)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  buyer_id: number;
  @BelongsTo(() => Admin, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  admin: Admin;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  product_id: number;
  @BelongsTo(() => Product, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  product: Product;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quality: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  total_prise: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  status: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  delivery_addres: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone_number: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  kurier_id: number;

  @ForeignKey(() => Kurier)
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  delivery_status: string;
  @BelongsTo(() => Kurier, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  kurier: Kurier;

  @HasMany(() => Payment)
  payment: Payment;

  @HasMany(() => ProductReweiw)
    productReweiw: ProductReweiw;
}
