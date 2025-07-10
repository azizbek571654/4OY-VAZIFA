import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Raiting } from '../../common/enum';

import {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import { ResturantTable } from '../../resturant_tables/model/resturant_table.model';
import { Menu } from '../../menus/model/menu.model';
import { Category } from '../../category/model/category.model';
import { CreateRestarantDto } from '../dto/create-restarant.dto';
import { User } from '../../users/model/user.model';

@Table({ tableName: 'Restarant', timestamps: false })
export class Restarant extends Model<Restarant, CreateRestarantDto> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare addres: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare phone: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare start_time: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare end_time: number;

  @Column({
    type: DataType.STRING,
  })
  declare Description: string;

  @Column({
    type: DataType.INTEGER
  })
  declare reyting: Raiting;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  declare catrgory_id: number;
  @BelongsTo(() => Category, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  category: Category;

  @ForeignKey(() => User)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  declare owner_id: number;
  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @HasMany(() => ResturantTable)
  resturantTable?: ResturantTable[];

  @HasMany(() => Menu)
  menu?: Menu;
}
