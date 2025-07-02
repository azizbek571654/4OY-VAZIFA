import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {
  @ApiProperty({
    example: "Azizbek Mirzavaliyev",
    description: "Foydalanuvchining toliq ismi",
  })
  @IsNotEmpty()
  @IsString()
  fullname: string;

  @ApiProperty({
    example: "azizbek@example.com",
    description: "Adminning email manzili",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "strongPassword123",
    description: "Admin paroli (kamida 6 ta belgi)",
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: true,
    description: "Agar foydalanuvchi yaratuvchi bolsa true boladi",
  })
  @IsBoolean()
  is_creator: boolean;

  @ApiProperty({
    example: true,
    description: "Foydalanuvchi aktiv holatda ekanini bildiradi",
  })
  @IsBoolean()
  is_active: boolean;
}
