import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
  @ApiProperty({ example: "Fantastika", description: "Kategoriya nomi" })
  @IsString()
  @IsNotEmpty()
  name: string;
}
