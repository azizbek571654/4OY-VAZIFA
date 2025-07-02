import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthorDto {
  @ApiProperty({
    example: "Chingiz Aytmatov",
    description: "Muallifning toliq ismi",
  })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({
    example: "Mashhur qirgiz yozuvchisi...",
    description: "Muallif haqida qisqacha malumot",
  })
  @IsString()
  @IsNotEmpty()
  bio: string;

  @ApiProperty({
    example: "https://server.com/photos/author1.jpg",
    description: "Muallif rasmi uchun URL",
  })
  @IsString()
  @IsUrl()
  photo_url: string;
}
