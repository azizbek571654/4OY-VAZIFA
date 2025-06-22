import { IsInt, IsPositive, IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { Notification } from '../model/notification.model';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNotificationDto implements Partial<Notification> {
  @ApiProperty({ example: 1, description: 'Xabarni oluvchi foydalanuvchi ID raqami' })
  @IsInt({ message: 'User ID butun son bolishi kerak' })
  @IsPositive({ message: 'User ID musbat son bolishi kerak' })
  user_id: number;

  @ApiProperty({ example: 'Sizga yangi xabar bor', description: 'Xabar matni' })
  @IsString({ message: 'Xabar matni satr bolishi kerak' })
  @IsNotEmpty({ message: 'Xabar matni bosh bolmasligi kerak' })
  @MaxLength(300, { message: 'Xabar matni 300 belgidan oshmasligi kerak' })
  message: string;
}
