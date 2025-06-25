import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Admin } from '../../admin/model/admin.model';
import { CreateProductReweiwDto } from '../dto/create-product-reweiw.dto';
import { ProductOrder } from '../../product-orders/model/product-order.model';
import { Product } from '../../product/model/product.model';

@Table({ tableName: 'productsReweiw' })
export class ProductReweiw extends Model<
  ProductReweiw,
  CreateProductReweiwDto
> {
  @ForeignKey(() => ProductOrder)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  Order_id: number;
  @BelongsTo(() => ProductOrder, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  productOrder: ProductOrder;

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
  user: Admin;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rayting: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  comment: string;
}
