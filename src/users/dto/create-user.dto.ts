import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Matches,
  Min,
  MinLength,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "Azizbek Mirzavaliyev", description: "Toliq ism" })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({
    example: "Parol123!",
    description: "Parol (kamida 6 ta belgi)",
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: "Parol123!", description: "Parolni tasdiqlash" })
  @IsString()
  @MinLength(6)
  confirm_password: string;

  @ApiProperty({ example: "+998901234567", description: "Telefon raqami" })
  @IsString()
  @Matches(/^\+998\d{9}$/, {
    message: "Telefon raqam +998 bilan boshlanishi kerak",
  })
  phone: string;

  @ApiProperty({ example: "aziz@gmail.com", description: "Email manzili" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "male", description: "Jinsi (male/female)" })
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty({ example: 2000, description: "Tugilgan yil" })
  @IsNumber()
  @Min(1900)
  birth_year: number;
}
