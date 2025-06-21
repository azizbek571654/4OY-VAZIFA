import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './model/admin.model';
export declare class AdminService {
    private readonly AdminModel;
    constructor(AdminModel: typeof Admin);
    create(createAdminDto: CreateAdminDto): Promise<Admin | "admin yaratilmadi">;
    findAll(): Promise<Admin[] | "adminlar topilmadi">;
    findOneADMIN(id: number): Promise<Admin | "admin topilmadi" | null>;
    update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin | "admin topilmadi">;
    remove(id: number): Promise<"admin topilmadi" | {
        message: string;
    }>;
}
