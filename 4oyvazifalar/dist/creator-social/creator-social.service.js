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
exports.CreatorSocialService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const creator_social_model_1 = require("./model/creator-social.model");
const admin_service_1 = require("../admin/admin.service");
const social_service_1 = require("../social/social.service");
let CreatorSocialService = class CreatorSocialService {
    creatorSocialModel;
    AdminServis;
    SocialServis;
    constructor(creatorSocialModel, AdminServis, SocialServis) {
        this.creatorSocialModel = creatorSocialModel;
        this.AdminServis = AdminServis;
        this.SocialServis = SocialServis;
    }
    async create(createCreatorSocialDto) {
        try {
            const admin = await this.AdminServis.findOneADMIN(createCreatorSocialDto.creator_id);
            if (!admin) {
                throw new common_1.NotFoundException(`bunday ${admin} id li admin topilmadi`);
            }
            const social = await this.SocialServis.findOneSOCIAL(createCreatorSocialDto.social_id);
            if (!social) {
                throw new common_1.NotFoundException(`bunday ${admin} id li social topilmadi`);
            }
            return await this.creatorSocialModel.create(createCreatorSocialDto);
        }
        catch (error) {
            console.error(error);
            return 'CreatorSocial yaratilmadi';
        }
    }
    async findAll() {
        try {
            return await this.creatorSocialModel.findAll();
        }
        catch (error) {
            console.error(error);
            return 'CreatorSociallar topilmadi';
        }
    }
    async findOne(id) {
        try {
            return await this.creatorSocialModel.findByPk(id);
        }
        catch (error) {
            console.error(error);
            return 'CreatorSocial topilmadi';
        }
    }
    async update(id, updateCreatorSocialDto) {
        try {
            const CreatorSocial = await this.creatorSocialModel.findByPk(id);
            if (!CreatorSocial)
                return `CreatorSocial topilmadi`;
            return await CreatorSocial.update(updateCreatorSocialDto);
        }
        catch (error) {
            console.error(error);
            return 'CreatorSocial topilmadi';
        }
    }
    async remove(id) {
        try {
            const CreatorSocial = await this.creatorSocialModel.findByPk(id);
            if (!CreatorSocial)
                return `CreatorSocial topilmadi`;
            await CreatorSocial.destroy();
            return { message: 'Deleted successfully' };
        }
        catch (error) {
            console.error(error);
            return 'CreatorSocial topilmadi';
        }
    }
};
exports.CreatorSocialService = CreatorSocialService;
exports.CreatorSocialService = CreatorSocialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(creator_social_model_1.CreatorSocial)),
    __metadata("design:paramtypes", [Object, admin_service_1.AdminService,
        social_service_1.SocialService])
], CreatorSocialService);
//# sourceMappingURL=creator-social.service.js.map