"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const admin_module_1 = require("./admin/admin.module");
const kurier_module_1 = require("./kurier/kurier.module");
const social_module_1 = require("./social/social.module");
const config_1 = require("@nestjs/config");
const categories_module_1 = require("./categories/categories.module");
const sequelize_1 = require("@nestjs/sequelize");
const admin_model_1 = require("./admin/model/admin.model");
const kurier_model_1 = require("./kurier/model/kurier.model");
const social_model_1 = require("./social/model/social.model");
const category_model_1 = require("./categories/model/category.model");
const donations_module_1 = require("./donations/donations.module");
const notifications_module_1 = require("./notifications/notifications.module");
const creator_social_module_1 = require("./creator-social/creator-social.module");
const notification_model_1 = require("./notifications/model/notification.model");
const creator_social_model_1 = require("./creator-social/model/creator-social.model");
const donation_model_1 = require("./donations/model/donation.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.PG_HOST,
                port: Number(process.env.PG_PORT),
                username: process.env.PG_USER,
                password: process.env.PG_PASS,
                database: process.env.PG_DB,
                autoLoadModels: true,
                synchronize: true,
                logging: false,
                models: [admin_model_1.Admin, kurier_model_1.Kurier, social_model_1.Social, category_model_1.Category, notification_model_1.Notification, creator_social_model_1.CreatorSocial, donation_model_1.Donation],
            }),
            admin_module_1.AdminModule,
            kurier_module_1.KurierModule,
            categories_module_1.CategoriesModule,
            social_module_1.SocialModule,
            donations_module_1.DonationsModule,
            notifications_module_1.NotificationsModule,
            creator_social_module_1.CreatorSocialModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map