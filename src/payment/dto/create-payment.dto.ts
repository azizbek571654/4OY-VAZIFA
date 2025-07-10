import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt } from 'class-validator';
import { Payment_type, Status } from '../../common/enum';

export class CreatePaymentDto {
  @ApiProperty({
    example: Payment_type.CARD,
    enum: Payment_type,
    description: 'Tolov turi',
  })
  @IsEnum(Payment_type)
  Payment_type: Payment_type;

  @ApiProperty({
    example: Status.PAID,
    enum: Status,
    description: 'Tolov holati',
  })
  @IsEnum(Status)
  status: Status;

  @ApiProperty({ example: 1, description: 'Buyurtma ID (Order)' })
  @IsInt()
  oeder_id: number;
  
  @ApiProperty({ example: 1, description: 'customer ID (User)' })
  @IsInt()
  user_id: number;
}
