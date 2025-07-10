import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsString, Length } from 'class-validator';
import { Raiting } from '../../common/enum';

export class CreateRestarantDto {
  @ApiProperty({ example: 'Choyxona', description: 'Restoran nomi' })
  @IsString()
  @Length(2, 100)
  name: string;

  @ApiProperty({ example: 'Toshkent, Yunusobod', description: 'Manzili' })
  @IsString()
  addres: string;

  @ApiProperty({ example: '+998901234567', description: 'Telefon raqam' })
  @IsString()
  phone: string;

  @ApiProperty({ example: 9, description: 'Ish boshlanish vaqti (soat)' })
  @IsInt()
  start_time: number;

  @ApiProperty({ example: 23, description: 'Ish tugash vaqti (soat)' })
  @IsInt()
  end_time: number;

  @ApiProperty({ example: 'Ananaviy milliy taomlar', description: 'Tavsif' })
  @IsString()
  Description: string;

  @ApiProperty({ example: Raiting.GOOD, enum: Raiting, description: 'Reyting' })
  @IsEnum(Raiting)
  reyting: Raiting;

  @ApiProperty({ example: 1, description: 'Kategoriya ID' })
  @IsInt()
  catrgory_id: number;

  @ApiProperty({ example: 2, description: 'Egasi (User ID)' })
  @IsInt()
  owner_id: number;
}
