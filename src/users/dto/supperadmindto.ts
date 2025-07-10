// users/dto/create-superadmin.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsInt,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';
import { Gender, Roles } from '../../common/enum';

export class CreateSuperAdminDto {
  @ApiProperty({ example: 'Super Admin', description: 'Super admin ismi' })
  @IsString()
  @Length(2, 50)
  name: string;

  @ApiProperty({ example: 'superadmin', description: 'Username' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'admin@example.com', description: 'Email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'admin123', description: 'Parol' })
  @IsString()
  @Length(6, 100)
  password: string;

  @ApiProperty({ example: '998901234567', description: 'Telefon raqam' })
  @IsPhoneNumber('UZ')
  phone: string;

  @ApiProperty({ example: Gender.MALE, enum: Gender, description: 'Jinsi' })
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty({ example: '30', description: 'Yoshi' })
  @IsString()
  age: string;

  @ApiProperty({ example: Roles.SUPERADMIN, enum: Roles, description: 'Roli' })
  @IsEnum(Roles)
  role: Roles;

  @ApiPropertyOptional({ example: 1, description: 'Til ID raqami (ixtiyoriy)' })
  @IsOptional()
  @IsInt()
  language_id: number;
}
