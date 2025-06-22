import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { Roles } from '../model/role.model';

export class CreateRoleDto implements Partial<Roles> {
  @IsString({ message: 'Role nomi satr bolishi kerak' })
  @IsNotEmpty({ message: 'Role nomi bosh bolmasligi kerak' })
  @MaxLength(50, { message: 'Role nomi 50 belgidan oshmasligi kerak' })
  value: string;

  @IsString({ message: 'Tavsif satr bolishi kerak' })
  @IsNotEmpty({ message: 'Tavsif bosh bolmasligi kerak' })
  @MaxLength(255, { message: 'Tavsif 255 belgidan oshmasligi kerak' })
  destcription: string;
}
