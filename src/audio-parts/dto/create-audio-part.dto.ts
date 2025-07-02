import { IsNotEmpty, IsNumber, IsString, IsUrl, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAudioPartDto {
  @ApiProperty({ example: 1, description: "Audio kitob IDsi" })
  @IsNumber()
  @Min(1)
  audio_book_id: number;

  @ApiProperty({ example: "1-qism: Kirish", description: "Audio qism nomi" })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: "https://server.com/audio/part1.mp3",
    description: "Audio fayl havolasi",
  })
  @IsString()
  @IsUrl()
  file_url: string;

  @ApiProperty({ example: 300, description: "Davomiyligi sekundda" })
  @IsNumber()
  @Min(1)
  duration: number;

  @ApiProperty({ example: 5.2, description: "Hajmi MBda" })
  @IsNumber()
  @Min(0.1)
  size_mb: number;

  @ApiProperty({ example: 1, description: "Audio tartib raqami" })
  @IsNumber()
  @Min(1)
  order_index: number;
}
