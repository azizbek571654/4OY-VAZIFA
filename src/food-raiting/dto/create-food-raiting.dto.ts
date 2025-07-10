import { IsEnum, IsInt, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Raiting } from '../../common/enum';

export class CreateFoodRaitingDto {
  @ApiProperty({ example: 1, description: 'Foydalanuvchi ID raqami' })
  @IsInt()
  user_id: number;

  @ApiProperty({ example: 5, description: 'Ovqat ID raqami' })
  @IsInt()
  food_id: number;

  @ApiProperty({
    example: Raiting.GOOD,
    enum: Raiting,
    description: 'Ovqat reytingi',
  })
  @IsEnum(Raiting)
  FoodRaiting: Raiting;

  @ApiProperty({
    example: 'Juda mazali edi!',
    description: 'Foydalanuvchi fikri',
  })
  @IsString()
  @Length(2, 300)
  comment: string;
}
