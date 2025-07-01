import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { CreateCategoryDto } from "../dto/create-category.dto";

@Table({ tableName: "category" })
export class Category extends Model<Category, CreateCategoryDto> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
