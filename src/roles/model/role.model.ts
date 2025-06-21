import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Admin } from '../../admin/model/admin.model';
import { UserRole } from '../../admin/model/user-role.model';

@Table({ tableName: 'roless' })
export class Roles extends Model<
  Roles,
  { value: string; destcription: string }
> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  value: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  destcription: string;

  @BelongsToMany(() => Admin, () => UserRole)
  users: Admin[];
}
