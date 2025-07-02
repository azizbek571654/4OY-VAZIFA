import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateLanguageDto {
  @ApiProperty({ example: "uz", description: "Til kodi (masalan: uz, en)" })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ example: "Ozbek", description: "Til nomi" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "https://server.com/flags/uz.png",
    description: "Bayroq rasmi URLsi",
  })
  @IsString()
  @IsUrl()
  flag: string;
}
