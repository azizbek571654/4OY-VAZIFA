import {
    Column,
    DataType,
    Model,
    Table,
  } from 'sequelize-typescript';
import { CreateAdminDto } from '../dto/create-admin.dto';

  @Table({ tableName: "admin" })
  export class Admin extends Model<Admin, CreateAdminDto> {
    @Column({
      type: DataType.STRING,
      allowNull: true,
    })
    declare fullname: string;

    @Column({
      type: DataType.STRING,
      allowNull: true,
      unique: true,
    })
    declare email: string;

    @Column({
      type: DataType.STRING,
      allowNull: true,
      unique: true,
    })
    declare password: string;

    @Column({
      type: DataType.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    })
    declare is_creator: boolean;

    @Column({
      type: DataType.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    })
    declare is_active: boolean;

    @Column({
      type: DataType.STRING,
      allowNull: true,
    })
    declare refresh_token: string | null;

    @Column({
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
    })
    declare activation_link: string;
  }
