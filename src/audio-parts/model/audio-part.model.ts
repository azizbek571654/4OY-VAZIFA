import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateAudioPartDto } from "../dto/create-audio-part.dto";


@Table({ tableName: "AudioPart" })
export class AudioPart extends Model<AudioPart, CreateAudioPartDto> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare audio_book_id: Number;
  
  @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    declare title: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare file_url: string;
    
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    declare duration: Number;
    
    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    declare size_mb: Number;
    
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    declare order_index: Number;
}
