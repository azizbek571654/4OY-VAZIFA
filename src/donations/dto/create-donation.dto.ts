import {
  IsInt,
  IsPositive,
  IsString,
  IsNotEmpty,
  Matches,
  MaxLength,
} from 'class-validator';
import { Donation } from '../model/donation.model';

export class CreateDonationDto implements Partial<Donation> {
  @IsInt({ message: 'Supporter ID butun son bolishi kerak' })
  @IsPositive({ message: 'Supporter ID musbat son bolishi kerak' })
  supporter_id: number;

  @IsInt({ message: 'Creator ID butun son bolishi kerak' })
  @IsPositive({ message: 'Creator ID musbat son bolishi kerak' })
  creator_id: number;

  @Matches(/^\d+(\.\d{1,2})?$/, {
    message: 'Amount butun yoki 2 xonali kasr son bolishi kerak (masalan: 10 yoki 10.50)',
  })
  amount: string;

  @IsString({ message: 'Xabar satr bolishi kerak' })
  @MaxLength(300, { message: 'Xabar 300 belgidan oshmasligi kerak' })
  message: string;

  @IsString({ message: 'Tolov turi satr bolishi kerak' })
  @IsNotEmpty({ message: 'Tolov turi bosh bolmasligi kerak' })
  @MaxLength(50, { message: 'Tolov turi 50 belgidan oshmasligi kerak' })
  payment_method: string;
}
