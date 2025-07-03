import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
// import { Book } from "./book.model"; // Agar Book modeli bo‘lsa
import { CreateBookCollectionDto } from "../dto/create-book-collection.dto"; 

@Table({ tableName: "book_collection" })
export class BookCollection extends Model<
  BookCollection,
  CreateBookCollectionDto
> {
//   @ForeignKey(() => Collection)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  collectionId: number;

//   @ForeignKey(() => Book)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  book_id: number;
}
