import { Roles } from '../model/role.model';

export class CreateRoleDto implements Partial<Roles> {
  value: string;
  destcription: string;
}
