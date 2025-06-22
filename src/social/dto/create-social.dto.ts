import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateSocialDto {
  @IsString({ message: 'Sarlavha satr bolishi kerak' })
  @IsNotEmpty({ message: 'Sarlavha bosh bolmasligi kerak' })
  @MaxLength(100, { message: 'Sarlavha 100 belgidan oshmasligi kerak' })
  title: string;

  @IsString({ message: 'Tavsif satr bolishi kerak' })
  @IsNotEmpty({ message: 'Tavsif bosh bolmasligi kerak' })
  @MaxLength(255, { message: 'Tavsif 255 belgidan oshmasligi kerak' })
  description: string;
}
