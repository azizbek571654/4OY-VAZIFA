import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { CreateNotificationDto } from '../dto/create-notification.dto';
import { NotificationType } from '../../common/enum';
import { defaultValueSchemable } from 'sequelize/types/utils';
import { User } from '../../users/model/user.model';

@Table({ tableName: 'Notification' })
export class Notification extends Model<Notification, CreateNotificationDto> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;
  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  message: string;

  @Column({
    type: DataType.ENUM(
      NotificationType.ORDER,
      NotificationType.PAYMENT,
      NotificationType.REVIEW,
      NotificationType.REMINDER,
      NotificationType.WARNING,
    ),
    allowNull: true,
    defaultValue: NotificationType.ORDER,
  })
  type: NotificationType;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  })
  is_read: boolean;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  owner_id: number;
  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  sellser: User;
}
