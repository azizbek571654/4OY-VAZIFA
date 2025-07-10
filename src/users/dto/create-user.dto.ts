import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Gender, Roles } from '../../common/enum';

export class CreateUserDto {
  @ApiProperty({ example: 'Azizbek', description: 'Foydalanuvchi ismi' })
  @IsString()
  @Length(2, 50)
  name: string;

  @ApiProperty({ example: 'azizdev', description: 'Username' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'azizbek@example.com', description: 'Email manzil' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '12345678', description: 'Parol' })
  @IsString()
  @Length(6, 100)
  password: string;

  @ApiProperty({ example: '+998901234567', description: 'Telefon raqam' })
  @IsString()
  phone: string;

  @ApiProperty({ example: Gender.MALE, enum: Gender, description: 'Jinsi' })
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty({ example: '22', description: 'Yoshi' })
  // @IsString()
  age: number;

  @ApiProperty({ example: true, description: 'Aktivmi yoki yo‘q' })
  @IsBoolean()
  is_active: boolean;

  @ApiProperty({ example: false, description: 'Banlanganmi yoki yo‘q' })
  @IsBoolean()
  is_banned: boolean;

  @ApiProperty({
    example: Roles.CUSTOMER,
    enum: Roles,
    description: 'Foydalanuvchi roli',
  })
  @IsEnum(Roles)
  role: Roles;

  @ApiProperty({ example: 1, description: 'Til ID' })
  @IsInt()
  language_id: number;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Aktivatsiya havolasi (UUID)',
  })
  // @IsOptional()
  activation_link: string;

  banned_until: Date;
}
