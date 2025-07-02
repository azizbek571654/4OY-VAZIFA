import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateAudioBookDto } from "../dto/create-audio-book.dto";

@Table({ tableName: "AudioBook" })
export class AudioBook extends Model<AudioBook, CreateAudioBookDto> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare book_version_id: Number;
  
  @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    declare narrator_name: string;
    
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    declare total_duration: Number;
    
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    declare total_size: Number;
}
