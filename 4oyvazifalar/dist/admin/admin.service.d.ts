import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './model/admin.model';
import { RolesService } from '../roles/roles.service';
export declare class AdminService {
    private readonly AdminModel;
    private readonly rolesService;
    constructor(AdminModel: typeof Admin, rolesService: RolesService);
    create(createAdminDto: CreateAdminDto): Promise<{
        success: boolean;
        message: string;
        data: Admin;
    }>;
    findAll(): Promise<{
        success: boolean;
        message: string;
        count: number;
        data: Admin[];
    }>;
    findOneADMIN(id: number): Promise<{
        success: boolean;
        message: string;
        data: Admin;
    }>;
    update(id: number, updateAdminDto: UpdateAdminDto): Promise<{
        success: boolean;
        message: string;
        data: Admin;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
