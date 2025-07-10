import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateResturantTableDto {
  @ApiProperty({ example: 1, description: 'Restoran ID' })
  @IsInt()
  returant_id: number;

  @ApiProperty({ example: 4, description: 'Orindiqlar soni' })
  @IsInt()
  human_count: number;

  @ApiProperty({ example: 'Zal, deraza oldi', description: 'Joylashuvi' })
  @IsString()
  location: string;

  @ApiProperty({ example: 12, description: 'Stol raqami' })
  @IsInt()
  number: number;
}
