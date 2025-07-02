import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAudioBookDto {
  @ApiProperty({
    example: 1,
    description: "Audio kitobga tegishli book_version_id (kitob versiyasi ID)",
  })
  @IsNumber()
  @Min(1)
  book_version_id: number;

  @ApiProperty({
    example: "Javohir Zokirov",
    description: "Kitobni ovozli o‘qigan shaxsning ismi",
  })
  @IsString()
  @IsNotEmpty()
  narrator_name: string;

  @ApiProperty({
    example: 3600,
    description: "Kitobning umumiy davomiyligi (sekundlarda)",
  })
  @IsNumber()
  @Min(1)
  total_duration: number;

  @ApiProperty({
    example: 250,
    description: "Kitob hajmi megabaytda (MB)",
  })
  @IsNumber()
  @Min(1)
  total_size: number;
}
