import { IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBasketDto {
  @ApiProperty({ example: 1, description: 'Foydalanuvchi ID raqami' })
  @IsInt()
  user_id: number;

  @ApiProperty({ example: 10, description: 'Ovqat ID raqami' })
  @IsInt()
  food_id: number;

  @ApiProperty({ example: 3, description: 'Ovqat soni' })
  @IsInt()
  @Min(1)
  count: number;
}
