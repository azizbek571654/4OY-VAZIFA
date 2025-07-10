import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { CreateFoodRaitingDto } from '../dto/create-food-raiting.dto';
import { Raiting } from '../../common/enum';
import { User } from '../../users/model/user.model';
import { Menu } from '../../menus/model/menu.model';

@Table({ tableName: 'FoodRaiting' })
export class FoodRaiting extends Model<FoodRaiting, CreateFoodRaitingDto> {
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

  @ForeignKey(() => Menu)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  food_id: number;
  @BelongsTo(() => Menu, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  menu: Menu;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  FoodRaiting: Raiting;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  comment: string;
}
