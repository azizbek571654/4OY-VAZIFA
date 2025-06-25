import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { CreateAdminDto } from '../dto/create-admin-temp';
import { Role } from '../../Enum';

@Table({ tableName: 'admins' })
export class Admin extends Model<Admin, CreateAdminDto> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  Phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  Password: string;

  @Column({
    type: DataType.ENUM(
      Role.supperadmin,
      Role.Admin,
      Role.User
    ),
    allowNull: false,
    // unique: true
  })
  role: string;
}
