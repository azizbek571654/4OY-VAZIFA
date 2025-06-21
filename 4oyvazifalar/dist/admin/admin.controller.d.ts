import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: CreateAdminDto): Promise<{
        success: boolean;
        message: string;
        data: import("./model/admin.model").Admin;
    }>;
    findAll(): Promise<{
        success: boolean;
        message: string;
        count: number;
        data: import("./model/admin.model").Admin[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        message: string;
        data: import("./model/admin.model").Admin;
    }>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<{
        success: boolean;
        message: string;
        data: import("./model/admin.model").Admin;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
