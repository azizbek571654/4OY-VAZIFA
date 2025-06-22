import { IsInt, IsPositive, IsUrl, IsNotEmpty } from 'class-validator';
import { CreatorSocial } from '../model/creator-social.model';

export class CreateCreatorSocialDto implements Partial<CreatorSocial> {
  @IsInt({ message: 'Creator ID butun son bolishi kerak' })
  @IsPositive({ message: 'Creator ID musbat son bolishi kerak' })
  creator_id: number;

  @IsInt({ message: 'Social ID butun son bolishi kerak' })
  @IsPositive({ message: 'Social ID musbat son bolishi kerak' })
  social_id: number;

  @IsNotEmpty({ message: 'URL bosh bolmasligi kerak' })
  url: string;
}
