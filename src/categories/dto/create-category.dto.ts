import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { Category } from '../model/category.model';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto implements Partial<Category> {
  @ApiProperty({
    example: 'maishiy texnika ',
    description: 'category nomi, noyob bolishi kerak',
  })
  @IsString({ message: 'Kategoriya nomi satr bolishi kerak' })
  @IsNotEmpty({ message: 'Kategoriya nomi bosh bolmasligi kerak' })
  @MinLength(2, { message: 'Kategoriya nomi kamida 2 belgidan iborat bolishi kerak' })
  @MaxLength(50, { message: 'Kategoriya nomi 50 belgidan oshmasligi kerak' })
  name: string;

  @ApiProperty({
    example: 'maishiy texnika faqatgina uy jihozlari ',
    description: 'fikir mulohaza ',
  })
  @IsString({ message: 'Tavsif satr bolishi kerak' })
  @MaxLength(255, { message: 'Tavsif 255 belgidan oshmasligi kerak' })
  description: string;
}
