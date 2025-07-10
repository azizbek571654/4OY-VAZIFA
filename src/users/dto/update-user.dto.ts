import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { Roles } from '../../common/enum';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  role?: Roles;
}
