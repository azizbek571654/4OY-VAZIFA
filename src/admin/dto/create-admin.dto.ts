import { IsString, IsEmail, MinLength, MaxLength, Matches, IsNotEmpty } from 'class-validator';
import { Admin } from '../model/admin.model';

export class CreateAdminDto implements Partial<Admin> {
  @IsString({ message: 'Foydalanuvchi nomi satr bolishi kerak' })
  @MinLength(3, { message: 'Foydalanuvchi nomi kamida 3 ta belgidan iborat bolishi kerak' })
  @MaxLength(30, { message: 'Foydalanuvchi nomi 30 belgidan oshmasligi kerak' })
  @IsNotEmpty({ message: 'Foydalanuvchi nomi bosh bolmasligi kerak' })
  username: string;

  @IsEmail({}, { message: 'Email notogri formatda' })
  @MaxLength(100, { message: 'Email 100 belgidan oshmasligi kerak' })
  @IsNotEmpty({ message: 'Email bosh bolmasligi kerak' })
  email: string;

  @IsString({ message: 'Parol satr bolishi kerak' })
  @MinLength(8, { message: 'Parol kamida 8 ta belgidan iborat bolishi kerak' })
  @MaxLength(64, { message: 'Parol 64 belgidan oshmasligi kerak' })
  @Matches(/(?=.*[a-z])/, { message: 'Parolda kamida 1 ta kichik harf bolishi kerak' })
  @Matches(/(?=.*[A-Z])/, { message: 'Parolda kamida 1 ta katta harf bolishi kerak' })
  @Matches(/(?=.*[!@#$%^&*])/, { message: 'Parolda kamida 1 ta maxsus belgi (!@#$%^&*) bolishi kerak' })
  password: string;

  @IsString({ message: 'Role satr bolishi kerak' })
  @IsNotEmpty({ message: 'Role bosh bolmasligi kerak' })
  role: string;
}
