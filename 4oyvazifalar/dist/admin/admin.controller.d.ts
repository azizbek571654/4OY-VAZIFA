import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: CreateAdminDto): Promise<import("./model/admin.model").Admin | "admin yaratilmadi">;
    findAll(): Promise<import("./model/admin.model").Admin[] | "adminlar topilmadi">;
    findOne(id: string): Promise<import("./model/admin.model").Admin | "admin topilmadi" | null>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<import("./model/admin.model").Admin | "admin topilmadi">;
    remove(id: string): Promise<"admin topilmadi" | {
        message: string;
    }>;
}
