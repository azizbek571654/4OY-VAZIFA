import { IsBoolean, IsEnum, IsInt, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { NotificationType } from '../../common/enum';

export class CreateNotificationDto {
  @ApiProperty({ example: 1, description: 'Foydalanuvchi ID' })
  @IsInt()
  user_id: number;

  @ApiProperty({ example: 'Buyurtmangiz tayyor!', description: 'Xabar matni' })
  @IsString()
  @Length(3, 255)
  message: string;

  @ApiProperty({
    example: NotificationType.ORDER,
    enum: NotificationType,
    description: 'Xabar turi',
  })
  @IsEnum(NotificationType)
  type: NotificationType;

  @ApiProperty({ example: false, description: 'Oqilgan yoki yoqligi' })
  @IsBoolean()
  is_read: boolean;

  @ApiProperty({
    example: 5,
    description: 'Xabar egasi (buyurtma, menu yoki boshqasi)',
  })
  @IsInt()
  owner_id: number;
}
