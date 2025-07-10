import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLanguageDto {
  @ApiProperty({ example: 'Ozbekcha', description: 'Til nomi' })
  @IsString()
  @Length(2, 50)
  name: string;
}
