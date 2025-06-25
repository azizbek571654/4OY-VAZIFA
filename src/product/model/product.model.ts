import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { CreateProductDto } from '../dto/create-product.dto';
import { Admin } from '../../admin/model/admin.model';
import { ProductImeg } from '../../product-imegs/model/product-imeg.model';
import { Category } from '../../categories/model/category.model';
import { ProductReweiw } from '../../product-reweiws/model/product-reweiw.model';

@Table({ tableName: 'products' })
export class Product extends Model<Product, CreateProductDto> {
  @ForeignKey(() => Admin)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  creator_id: number;
  @BelongsTo(() => Admin, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  admin: Admin;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  product_images: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  in_stock: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  is_available: boolean;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  category_id: number;
  @BelongsTo(() => Category, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  category: Category;

  @HasMany(() => ProductImeg)
  productImeg: ProductImeg;

  @HasMany(() => ProductReweiw)
    productReweiw: ProductReweiw;
}
