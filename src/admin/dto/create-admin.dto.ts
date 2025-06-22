import { IsString, IsEmail, MinLength, MaxLength, Matches, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Admin } from '../model/admin.model';

export class CreateAdminDto implements Partial<Admin> {
  @ApiProperty({
    example: 'admin123',
    description: 'Foydalanuvchi nomi, noyob bolishi kerak',
  })
  @IsString({ message: 'Foydalanuvchi nomi satr bolishi kerak' })
  @MinLength(3, { message: 'Foydalanuvchi nomi kamida 3 ta belgidan iborat bolishi kerak' })
  @MaxLength(30, { message: 'Foydalanuvchi nomi 30 belgidan oshmasligi kerak' })
  @IsNotEmpty({ message: 'Foydalanuvchi nomi bosh bolmasligi kerak' })
  username: string;

  @ApiProperty({
    example: 'admin@example.com',
    description: 'Email manzili, togri formatda bolishi kerak',
  })
  @IsEmail({}, { message: 'Email notogri formatda' })
  @MaxLength(100, { message: 'Email 100 belgidan oshmasligi kerak' })
  @IsNotEmpty({ message: 'Email bosh bolmasligi kerak' })
  email: string;

  @ApiProperty({
    example: 'Secure@123',
    description: 'Kuchli parol: katta va kichik harflar, raqamlar va maxsus belgilarni oz ichiga olgan',
  })
  @IsString({ message: 'Parol satr bolishi kerak' })
  @MinLength(8, { message: 'Parol kamida 8 ta belgidan iborat bolishi kerak' })
  @MaxLength(64, { message: 'Parol 64 belgidan oshmasligi kerak' })
  @Matches(/(?=.*[a-z])/, { message: 'Parolda kamida 1 ta kichik harf bolishi kerak' })
  @Matches(/(?=.*[A-Z])/, { message: 'Parolda kamida 1 ta katta harf bolishi kerak' })
  @Matches(/(?=.*[!@#$%^&*])/, { message: 'Parolda kamida 1 ta maxsus belgi (!@#$%^&*) bolishi kerak' })
  password: string;

  @ApiProperty({
    example: 'ADMIN',
    description: 'Rol nomi, tizimdagi mavjud rollardan biri',
  })
  @IsString({ message: 'Role satr bolishi kerak' })
  @IsNotEmpty({ message: 'Role bosh bolmasligi kerak' })
  role: string;
}
