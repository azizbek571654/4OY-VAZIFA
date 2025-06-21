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
import { CreateProductImegDto } from '../dto/create-product-imeg.dto';
import { Product } from '../../product/model/product.model';

@Table({ tableName: 'product-Imeg' })
export class ProductImeg extends Model<ProductImeg, CreateProductImegDto> {
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
    type: DataType.STRING,
    allowNull: false,
  })
  img_url: string;
}
