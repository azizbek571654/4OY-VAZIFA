import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateBookVersionDto } from "../dto/create-book-version.dto";


@Table({ tableName: "BookVersion" })
export class BookVersion extends Model<BookVersion, CreateBookVersionDto> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare book_id: Number;
  
  @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    declare lamguage_id: number;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare title: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare description: string;
   
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare text_url: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare cover_url: string;
    
}