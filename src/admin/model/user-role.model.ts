import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Admin } from './admin.model';
import { Roles } from '../../roles/model/role.model';

@Table({ tableName: 'user-role' })
export class UserRole extends Model<
  UserRole,
  { userId: number; roleId: number }
> {
  @ForeignKey(() => Admin)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    unique: true,
  })
  userId: number;

  @ForeignKey(() => Roles)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    unique: true,
  })
  roleId: number;
}
