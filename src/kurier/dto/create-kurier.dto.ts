import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Matches,
  MaxLength,
} from 'class-validator';
import { Kurier } from '../model/kurier.model';

export class CreateKurierDto implements Partial<Kurier> {
  @IsString({ message: 'Toliq ism satr bolishi kerak' })
  @IsNotEmpty({ message: 'Toliq ism bosh bolmasligi kerak' })
  @MaxLength(100, { message: 'Toliq ism 100 belgidan oshmasligi kerak' })
  full_name: string;

  @IsString({ message: 'Telefon raqam satr bolishi kerak' })
  @Matches(/^\+998\d{9}$/, {
    message: 'Telefon raqam +998 bilan boshlanadigan 9 xonali bolishi kerak',
  })
  phone: string;

  @IsEmail({}, { message: 'Email notogri formatda' })
  email: string;

  @IsString({ message: 'Holat satr bolishi kerak' })
  @IsNotEmpty({ message: 'Holat bosh bolmasligi kerak' })
  status: string;
}
