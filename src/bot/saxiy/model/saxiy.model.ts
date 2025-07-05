import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

interface ISaxiy {
  user_id: number;

  last_state: string;
}

@Table({ tableName: 'Saxiy' })
export class Saxiy extends Model<Saxiy, ISaxiy> {
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.BIGINT,
  })
  declare user_id: number;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
  })
  declare address: string;
  
  @Column({
    type: DataType.STRING,
  })
  declare product: string;

  @Column({
    type: DataType.STRING,
  })
  declare location: string;

  @Column({
    type: DataType.STRING(15),
  })
  declare phone_number: string;

  @Column({
    type: DataType.STRING(50),
  })
  declare last_state: string;
}