import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Matches,
  MaxLength,
} from 'class-validator';
import { Kurier } from '../model/kurier.model';
import { ApiProperty } from '@nestjs/swagger';

export class CreateKurierDto implements Partial<Kurier> {
  @ApiProperty({
    example: 'Ali Valiyev',
    description: 'Kurьerning to‘liq ismi',
  })
  @IsString({ message: 'Toliq ism satr bolishi kerak' })
  @IsNotEmpty({ message: 'Toliq ism bosh bolmasligi kerak' })
  @MaxLength(100, { message: 'Toliq ism 100 belgidan oshmasligi kerak' })
  full_name: string;

  @ApiProperty({
    example: '+998901234567',
    description: 'Kurьer telefon raqami (+998 bilan boshlanishi shart)',
  })
  @IsString({ message: 'Telefon raqam satr bolishi kerak' })
  @Matches(/^\+998\d{9}$/, {
    message: 'Telefon raqam +998 bilan boshlanadigan 9 xonali bolishi kerak',
  })
  phone: string;
  @ApiProperty({
    example: 'kurier@example.com',
    description: 'Kurьerning email manzili',
  })
  @IsEmail({}, { message: 'Email notogri formatda' })
  email: string;
  @ApiProperty({
    example: 'active',
    description: 'Kurьer holati (masalan: active, pending)',
  })
  @IsString({ message: 'Holat satr bolishi kerak' })
  @IsNotEmpty({ message: 'Holat bosh bolmasligi kerak' })
  status: string;
}
