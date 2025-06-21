"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatorSocialModule = void 0;
const common_1 = require("@nestjs/common");
const creator_social_service_1 = require("./creator-social.service");
const creator_social_controller_1 = require("./creator-social.controller");
const sequelize_1 = require("@nestjs/sequelize");
const creator_social_model_1 = require("./model/creator-social.model");
const admin_model_1 = require("../admin/model/admin.model");
const admin_module_1 = require("../admin/admin.module");
const social_model_1 = require("../social/model/social.model");
const social_module_1 = require("../social/social.module");
let CreatorSocialModule = class CreatorSocialModule {
};
exports.CreatorSocialModule = CreatorSocialModule;
exports.CreatorSocialModule = CreatorSocialModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([creator_social_model_1.CreatorSocial, admin_model_1.Admin, social_model_1.Social]), admin_module_1.AdminModule, social_module_1.SocialModule],
        controllers: [creator_social_controller_1.CreatorSocialController],
        providers: [creator_social_service_1.CreatorSocialService],
        exports: [creator_social_service_1.CreatorSocialService],
    })
], CreatorSocialModule);
//# sourceMappingURL=creator-social.module.js.map