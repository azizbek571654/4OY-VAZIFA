"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const admin_model_1 = require("./model/admin.model");
const roles_service_1 = require("../roles/roles.service");
let AdminService = class AdminService {
    AdminModel;
    rolesService;
    constructor(AdminModel, rolesService) {
        this.AdminModel = AdminModel;
        this.rolesService = rolesService;
    }
    async create(createAdminDto) {
        try {
            const role = await this.rolesService.findRoleByValue(createAdminDto.role);
            if (!role) {
                throw new common_1.HttpException({
                    success: false,
                    message: 'role topilmadi',
                }, common_1.HttpStatus.NOT_FOUND);
            }
            const newAdmin = await this.AdminModel.create(createAdminDto);
            await newAdmin.$set('Roles', role.id);
            await newAdmin.save();
            return {
                success: true,
                message: 'Admin yaratildi',
                data: newAdmin,
            };
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException({
                success: false,
                message: 'Admin yaratilmadi',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            const admins = await this.AdminModel.findAll();
            return {
                success: true,
                message: 'Barcha adminlar',
                count: admins.length,
                data: admins,
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: 'Adminlar topilmadi',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOneADMIN(id) {
        try {
            const admin = await this.AdminModel.findByPk(id);
            if (!admin) {
                throw new common_1.HttpException({
                    success: false,
                    message: 'Admin topilmadi',
                }, common_1.HttpStatus.NOT_FOUND);
            }
            return {
                success: true,
                message: 'Admin topildi',
                data: admin,
            };
        }
        catch (error) {
            console.error(error);
            throw error instanceof common_1.HttpException
                ? error
                : new common_1.HttpException({
                    success: false,
                    message: 'Adminni olishda xatolik',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateAdminDto) {
        try {
            const admin = await this.AdminModel.findByPk(id);
            if (!admin) {
                throw new common_1.HttpException({
                    success: false,
                    message: 'Admin topilmadi',
                }, common_1.HttpStatus.NOT_FOUND);
            }
            const updated = await admin.update(updateAdminDto);
            return {
                success: true,
                message: 'Admin yangilandi',
                data: updated,
            };
        }
        catch (error) {
            console.error(error);
            throw error instanceof common_1.HttpException
                ? error
                : new common_1.HttpException({
                    success: false,
                    message: 'Admin yangilanmadi',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            const admin = await this.AdminModel.findByPk(id);
            if (!admin) {
                throw new common_1.HttpException({
                    success: false,
                    message: 'Admin topilmadi',
                }, common_1.HttpStatus.NOT_FOUND);
            }
            await admin.destroy();
            return {
                success: true,
                message: 'Admin ochirildi',
            };
        }
        catch (error) {
            throw error instanceof common_1.HttpException
                ? error
                : new common_1.HttpException({
                    success: false,
                    message: 'Adminni ochirishda xatolik',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(admin_model_1.Admin)),
    __metadata("design:paramtypes", [Object, roles_service_1.RolesService])
], AdminService);
//# sourceMappingURL=admin.service.js.map