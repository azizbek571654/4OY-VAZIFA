import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateBookDto } from "../dto/create-book.dto";


@Table({ tableName: "Book" })
export class Book extends Model<Book, CreateBookDto> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare puplish_yerar: string;
  
  @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    declare authorID: number;
    
}
