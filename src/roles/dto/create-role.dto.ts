import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { Roles } from '../model/role.model';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto implements Partial<Roles> {
  @ApiProperty({ example: 'ADMIN', description: 'Rol nomi (masalan: ADMIN, USER)' })
  @IsString({ message: 'Role nomi satr bolishi kerak' })
  @IsNotEmpty({ message: 'Role nomi bosh bolmasligi kerak' })
  @MaxLength(50, { message: 'Role nomi 50 belgidan oshmasligi kerak' })
  value: string;

  @ApiProperty({ example: 'Admin foydalanuvchi huquqlari', description: 'Rol tavsifi' })
  @IsString({ message: 'Tavsif satr bolishi kerak' })
  @IsNotEmpty({ message: 'Tavsif bosh bolmasligi kerak' })
  @MaxLength(255, { message: 'Tavsif 255 belgidan oshmasligi kerak' })
  destcription: string;
}
