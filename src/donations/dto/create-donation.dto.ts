import {
  IsInt,
  IsPositive,
  IsString,
  IsNotEmpty,
  Matches,
  MaxLength,
} from 'class-validator';
import { Donation } from '../model/donation.model';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDonationDto implements Partial<Donation> {
  @ApiProperty({
    example: 3,
    description: 'Supporter (yordamchi foydalanuvchi) ID raqami',
  })
  @IsInt({ message: 'Supporter ID butun son bolishi kerak' })
  @IsPositive({ message: 'Supporter ID musbat son bolishi kerak' })
  supporter_id: number;

  @ApiProperty({
    example: 5,
    description: 'Yaratgan (creator) foydalanuvchi ID raqami',
  })
  @IsInt({ message: 'Creator ID butun son bolishi kerak' })
  @IsPositive({ message: 'Creator ID musbat son bolishi kerak' })
  creator_id: number;

  @ApiProperty({
    example: '10.50',
    description: 'Yuborilgan mablag miqdori (butun yoki 2 xonali kasr)',
  })
  @Matches(/^\d+(\.\d{1,2})?$/, {
    message:
      'Amount butun yoki 2 xonali kasr son bolishi kerak (masalan: 10 yoki 10.50)',
  })
  amount: string;

  @ApiProperty({
    example: 'Omadingizni bersin!',
    description: 'Donatsiyaga yozilgan shaxsiy xabar',
  })
  @IsString({ message: 'Xabar satr bolishi kerak' })
  @MaxLength(300, { message: 'Xabar 300 belgidan oshmasligi kerak' })
  message: string;

  @ApiProperty({
    example: 'Click',
    description: 'Tolov usuli (masalan: Click, Payme)',
  })
  @IsString({ message: 'Tolov turi satr bolishi kerak' })
  @IsNotEmpty({ message: 'Tolov turi bosh bolmasligi kerak' })
  @MaxLength(50, { message: 'Tolov turi 50 belgidan oshmasligi kerak' })
  payment_method: string;
}
