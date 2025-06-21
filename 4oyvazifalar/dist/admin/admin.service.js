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
let AdminService = class AdminService {
    AdminModel;
    constructor(AdminModel) {
        this.AdminModel = AdminModel;
    }
    async create(createAdminDto) {
        try {
            return await this.AdminModel.create(createAdminDto);
        }
        catch (error) {
            console.error(error);
            return 'admin yaratilmadi';
        }
    }
    async findAll() {
        try {
            return await this.AdminModel.findAll();
        }
        catch (error) {
            console.error(error);
            return 'adminlar topilmadi';
        }
    }
    async findOneADMIN(id) {
        try {
            return await this.AdminModel.findByPk(id);
        }
        catch (error) {
            console.error(error);
            return 'admin topilmadi';
        }
    }
    async update(id, updateAdminDto) {
        try {
            const admin = await this.AdminModel.findByPk(id);
            if (!admin)
                return `admin topilmadi`;
            return await admin.update(updateAdminDto);
        }
        catch (error) {
            console.error(error);
            return 'admin topilmadi';
        }
    }
    async remove(id) {
        try {
            const admin = await this.AdminModel.findByPk(id);
            if (!admin)
                return `admin topilmadi`;
            await admin.destroy();
            return { message: 'Deleted successfully' };
        }
        catch (error) {
            console.error(error);
            return 'admin topilmadi';
        }
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(admin_model_1.Admin)),
    __metadata("design:paramtypes", [Object])
], AdminService);
//# sourceMappingURL=admin.service.js.map