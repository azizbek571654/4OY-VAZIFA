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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const role_model_1 = require("./model/role.model");
let RolesService = class RolesService {
    rolesModel;
    constructor(rolesModel) {
        this.rolesModel = rolesModel;
    }
    async create(createRoleDto) {
        try {
            const newrole = await this.rolesModel.create({
                ...createRoleDto,
                value: createRoleDto.value.toUpperCase(),
            });
            return {
                success: true,
                message: 'Admin yaratildi',
                data: newrole,
            };
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException({
                success: false,
                message: 'role yaratilmadi',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            const roles = await this.rolesModel.findAll();
            return {
                success: true,
                message: 'Barcha rolelar',
                count: roles.length,
                data: roles,
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: 'rolelar topilmadi',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOneRoles(id) {
        try {
            const role = await this.rolesModel.findByPk(id);
            if (!role) {
                throw new common_1.HttpException({
                    success: false,
                    message: 'role topilmadi',
                }, common_1.HttpStatus.NOT_FOUND);
            }
            return {
                success: true,
                message: 'role topildi',
                data: role,
            };
        }
        catch (error) {
            console.error(error);
            throw error instanceof common_1.HttpException
                ? error
                : new common_1.HttpException({
                    success: false,
                    message: 'roleni olishda xatolik',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findRoleByValue(value) {
        try {
            return this.rolesModel.findOne({ where: { value: value.toUpperCase() } });
        }
        catch (error) {
            console.error(error);
            throw error instanceof common_1.HttpException
                ? error
                : new common_1.HttpException({
                    success: false,
                    message: 'roleni olishda xatolik',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateRoleDto) {
        try {
            const role = await this.rolesModel.findByPk(id);
            if (!role) {
                throw new common_1.HttpException({
                    success: false,
                    message: 'role topilmadi',
                }, common_1.HttpStatus.NOT_FOUND);
            }
            const updated = await role.update({
                ...updateRoleDto,
                value: updateRoleDto.value?.toUpperCase(),
            });
            return {
                success: true,
                message: 'role yangilandi',
                data: updated,
            };
        }
        catch (error) {
            console.error(error);
            throw error instanceof common_1.HttpException
                ? error
                : new common_1.HttpException({
                    success: false,
                    message: 'role yangilanmadi',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            const role = await this.rolesModel.findByPk(id);
            if (!role) {
                throw new common_1.HttpException({
                    success: false,
                    message: 'role topilmadi',
                }, common_1.HttpStatus.NOT_FOUND);
            }
            await role.destroy();
            return {
                success: true,
                message: 'role ochirildi',
            };
        }
        catch (error) {
            throw error instanceof common_1.HttpException
                ? error
                : new common_1.HttpException({
                    success: false,
                    message: 'roleni ochirishda xatolik',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(role_model_1.Roles)),
    __metadata("design:paramtypes", [Object])
], RolesService);
//# sourceMappingURL=roles.service.js.map