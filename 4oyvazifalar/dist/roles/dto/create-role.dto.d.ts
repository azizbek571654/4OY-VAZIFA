import { Roles } from '../model/role.model';
export declare class CreateRoleDto implements Partial<Roles> {
    value: string;
    destcription: string;
}
