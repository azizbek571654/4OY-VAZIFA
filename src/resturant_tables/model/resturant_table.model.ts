import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { CreateResturantTableDto } from '../dto/create-resturant_table.dto';
import { Restarant } from '../../restarant/model/restarant.model';
import { Order } from '../../orders/model/order.model';

@Table({ tableName: 'ResturantTable' })
export class ResturantTable extends Model<
  ResturantTable,
  CreateResturantTableDto
> {
  @ForeignKey(() => Restarant)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  returant_id: number;
  @BelongsTo(() => Restarant, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  restarant: Restarant;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  human_count: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  number: number;

  @HasMany(() => Order)
  order?: Order;
}
