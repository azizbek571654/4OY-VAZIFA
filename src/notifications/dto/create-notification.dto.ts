import { IsInt, IsPositive, IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { Notification } from '../model/notification.model';

export class CreateNotificationDto implements Partial<Notification> {
  @IsInt({ message: 'User ID butun son bolishi kerak' })
  @IsPositive({ message: 'User ID musbat son bolishi kerak' })
  user_id: number;

  @IsString({ message: 'Xabar matni satr bolishi kerak' })
  @IsNotEmpty({ message: 'Xabar matni bosh bolmasligi kerak' })
  @MaxLength(300, { message: 'Xabar matni 300 belgidan oshmasligi kerak' })
  message: string;
}
