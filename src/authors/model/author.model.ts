import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { CreateAuthorDto } from "../dto/create-author.dto";

@Table({ tableName: "author" })
export class Author extends Model<Author, CreateAuthorDto> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  bio: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  photo_url: string;
}
