import { Admin } from '../model/admin.model';
export declare class CreateAdminDto implements Partial<Admin> {
    username: string;
    email: string;
    password: string;
    role: string;
}
