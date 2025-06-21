import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRoleDto: CreateRoleDto): Promise<{
        success: boolean;
        message: string;
        data: import("./model/role.model").Roles;
    }>;
    findAll(): Promise<{
        success: boolean;
        message: string;
        count: number;
        data: import("./model/role.model").Roles[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        message: string;
        data: import("./model/role.model").Roles;
    }>;
    findRoleByValue(value: string): Promise<import("./model/role.model").Roles | null>;
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<{
        success: boolean;
        message: string;
        data: import("./model/role.model").Roles;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
