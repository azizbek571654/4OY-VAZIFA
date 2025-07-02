import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
  @ApiProperty({ example: "2022", description: "Nashr yili" })
  @IsString()
  @IsNotEmpty()
  puplish_yerar: string;

  @ApiProperty({ example: 3, description: "Muallif IDsi" })
  @IsNumber()
  @Min(1)
  authorID: number;
}
