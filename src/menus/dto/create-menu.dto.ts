import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Raiting } from '../../common/enum';

export class CreateMenuDto {
  @ApiProperty({ example: 'Lagmon', description: 'Taom nomi' })
  @IsString()
  @Length(2, 100)
  name: string;

  @ApiProperty({
    example: 'Qoy goshtidan tayyorlangan lagmon',
    description: 'Tavsif',
  })
  @IsString()
  description: string;

  @ApiProperty({ example: 25000, description: 'Narxi' })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 1, description: 'Kategoriya ID' })
  @IsInt()
  category_id: number;

  @ApiProperty({ example: 2, description: 'Restoran ID' })
  @IsInt()
  resturant_id: number;

  @ApiProperty({ example: 5, description: 'Soni' })
  @IsInt()
  count: number;

  @ApiProperty({ example: Raiting.GOOD, enum: Raiting, description: 'Reyting' })
  @IsEnum(Raiting)
  @IsOptional()
  reyting: Raiting;

  @ApiProperty({
    example: 'https://images.com/lagmon.jpg',
    description: 'Rasm URL',
  })
  @IsString()
  image_url: string;

  @ApiProperty({ example: 300, description: 'Kaloriya miqdori' })
  @IsNumber()
  calories: number;
}
