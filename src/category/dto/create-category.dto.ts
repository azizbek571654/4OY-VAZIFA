import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Ichimliklar', description: 'Kategoriya nomi' })
  @IsString()
  @Length(2, 50)
  name: string;

  @ApiProperty({
    example: 'Har xil ichimliklar toifasi',
    description: 'Kategoriya haqida tavsif',
  })
  @IsString()
  @Length(5, 255)
  destcription: string;
}
