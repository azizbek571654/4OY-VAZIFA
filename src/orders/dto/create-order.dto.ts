import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus } from '../../common/enum';

export class CreateOrderDto {
  @ApiProperty({ example: 3, description: 'Foydalanuvchi ID' })
  @IsInt()
  user_id: number;

  @ApiProperty({ example: 1, description: 'Savat ID' })
  @IsInt()
  basket_id: number;

  @ApiProperty({ example: 5, description: 'Stol ID raqami' })
  @IsInt()
  table_id: number;

  @ApiProperty({
    example: OrderStatus.PENDING,
    description: 'Buyurtma beruvchi ismi',
  })
  @IsString()
  @Length(2, 50)
  name?: OrderStatus;

  @ApiProperty({ example: 125000, description: 'Umumiy narxi' })
  @IsNumber()
  total_prise: number;

  @ApiProperty({ example: false, description: 'Tolangan yoki yoqligi' })
  @IsBoolean()
  is_paid: boolean;

  @ApiProperty({ example: 'Zalga olib kelib bering', description: 'Izoh' })
  @IsOptional()
  @IsString()
  @Length(0, 255)
  note: string;
}
