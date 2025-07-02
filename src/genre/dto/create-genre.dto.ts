import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateGenreDto {
  @ApiProperty({ example: "Drama", description: "Janr nomi" })
  @IsString()
  @IsNotEmpty()
  name: string;
}
