import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Roles } from './model/role.model';
export declare class RolesService {
    private readonly rolesModel;
    constructor(rolesModel: typeof Roles);
    create(createRoleDto: CreateRoleDto): Promise<{
        success: boolean;
        message: string;
        data: Roles;
    }>;
    findAll(): Promise<{
        success: boolean;
        message: string;
        count: number;
        data: Roles[];
    }>;
    findOneRoles(id: number): Promise<{
        success: boolean;
        message: string;
        data: Roles;
    }>;
    findRoleByValue(value: string): Promise<Roles | null>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<{
        success: boolean;
        message: string;
        data: Roles;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
