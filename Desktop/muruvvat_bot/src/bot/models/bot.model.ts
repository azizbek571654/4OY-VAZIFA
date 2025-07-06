import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface IBot {
  user_id: number;
  username: string;
  first_name: string;
  last_name: string;
  language_code: string;
  phone_number?: string;
  status?: boolean;
  role?: string; // 'sahiy' yoki 'sabrli'
  location?: string; // JSON formatda
}

@Table({ tableName: 'muruvvats' })
export class Bot extends Model<Bot, IBot> {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
  })
  declare user_id: number;

  @Column({
    type: DataType.STRING,
  })
  declare username: string;

  @Column({
    type: DataType.STRING,
  })
  declare first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare last_name: string;

  @Column({
    type: DataType.STRING(3),
  })
  declare language_code: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
  })
  declare phone_number: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare status: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare role: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare location: string;
}
