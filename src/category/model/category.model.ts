import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { Menu } from '../../menus/model/menu.model';
import { Restarant } from '../../restarant/model/restarant.model';

@Table({ tableName: 'category' })
export class Category extends Model<Category, CreateCategoryDto> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  destcription: string;

  @HasMany(() => Menu)
  menu?: Menu;

  @HasMany(() => Restarant)
  restarant?: Restarant;
}
