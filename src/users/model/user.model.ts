import {
    Column,
    DataType,
    Model,
    Table,
  } from 'sequelize-typescript';
import { CreateUserDto } from '../dto/create-user.dto';

  @Table({ tableName: "user" })
  export class User extends Model<User, CreateUserDto> {
    @Column({
      type: DataType.STRING,
      allowNull: true,
    })
    fullname: string;

    @Column({
      type: DataType.STRING,
      allowNull: true,
      unique: true,
    })
    email: string;

    @Column({
      type: DataType.STRING,
      allowNull: true,
      unique: true,
    })
    password: string;

    @Column({
      type: DataType.STRING,
      allowNull: true,
    })
    phoneNumber: string;

    @Column({
      type: DataType.STRING,
      allowNull: true,
    })
    gender: string;

    @Column({
      type: DataType.SMALLINT,
      allowNull: true,
    })
    birth_data: number;

    @Column({
      type: DataType.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    })
    is_active: boolean;

    @Column({
      type: DataType.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    })
    is_premium: boolean;

    @Column({
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      allowNull: true,
    })
    activation_link: string;

    @Column({
      type: DataType.STRING,
      allowNull: true,
    })
    refresh_token: string | null;
  }
