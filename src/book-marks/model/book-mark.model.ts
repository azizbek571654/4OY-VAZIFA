import { Table, Column, Model, DataType } from "sequelize-typescript";
import { CreateBookMarkDto } from "../dto/create-book-mark.dto";


@Table({ tableName: "bookmark" })
export class BookMark extends Model<BookMark, CreateBookMarkDto> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  bookId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  note: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  position: string;
}
