import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'admins' })
export class Admin extends Model<
  Admin,
  { username: string; email: string; password: string; role: string }
> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role: string;
}
