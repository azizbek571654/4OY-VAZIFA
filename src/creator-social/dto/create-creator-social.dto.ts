import { IsInt, IsPositive, IsUrl, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreatorSocial } from '../model/creator-social.model';

export class CreateCreatorSocialDto implements Partial<CreatorSocial> {
  @ApiProperty({ example: 1, description: 'Creatorning ID raqami' })
  @IsInt({ message: 'Creator ID butun son bolishi kerak' })
  @IsPositive({ message: 'Creator ID musbat son bolishi kerak' })
  creator_id: number;

  @ApiProperty({ example: 2, description: 'Social media platformasi ID raqami' })
  @IsInt({ message: 'Social ID butun son bolishi kerak' })
  @IsPositive({ message: 'Social ID musbat son bolishi kerak' })
  social_id: number;
  @ApiProperty({ example: 'https://instagram.com/example', description: 'Social URL manzili' })
  @IsNotEmpty({ message: 'URL bosh bolmasligi kerak' })
  url: string;
}
