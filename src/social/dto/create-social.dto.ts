import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateSocialDto {
  @ApiProperty({ example: 'Instagram', description: 'Ijtimoiy tarmoq nomi' })
  @IsString({ message: 'Sarlavha satr bolishi kerak' })
  @IsNotEmpty({ message: 'Sarlavha bosh bolmasligi kerak' })
  @MaxLength(100, { message: 'Sarlavha 100 belgidan oshmasligi kerak' })
  title: string;

  @ApiProperty({
    example: 'Rasm va video ulashish platformasi',
    description: 'Ijtimoiy tarmoq tavsifi',
  })
  @IsString({ message: 'Tavsif satr bolishi kerak' })
  @IsNotEmpty({ message: 'Tavsif bosh bolmasligi kerak' })
  @MaxLength(255, { message: 'Tavsif 255 belgidan oshmasligi kerak' })
  description: string;
}
