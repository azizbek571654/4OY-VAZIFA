import { IsNotEmpty, IsNumber, IsString, IsUrl, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateBookVersionDto {
  @ApiProperty({ example: 10, description: "Kitob IDsi" })
  @IsNumber()
  @Min(1)
  book_id: number;

  @ApiProperty({
    example: 2,
    description: "Til IDsi (masalan: ozbek = 1, rus = 2)",
  })
  @IsNumber()
  @Min(1)
  lamguage_id: number;

  @ApiProperty({
    example: "Alpomish (Ozbek tilida)",
    description: "Versiya sarlavhasi",
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: "Bu kitob ozbek xalq eposi haqida...",
    description: "Versiya tavsifi",
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: "https://server.com/texts/alpomish.pdf",
    description: "Matn fayl havolasi",
  })
  @IsString()
  @IsUrl()
  text_url: string;

  @ApiProperty({
    example: "https://server.com/images/cover1.jpg",
    description: "Kitob muqovasi URLsi",
  })
  @IsString()
  @IsUrl()
  cover_url: string;
}
