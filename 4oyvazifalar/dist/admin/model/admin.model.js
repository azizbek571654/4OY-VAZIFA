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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const creator_social_model_1 = require("../../creator-social/model/creator-social.model");
const donation_model_1 = require("../../donations/model/donation.model");
const notification_model_1 = require("../../notifications/model/notification.model");
const role_model_1 = require("../../roles/model/role.model");
const user_role_model_1 = require("./user-role.model");
const product_model_1 = require("../../product/model/product.model");
let Admin = class Admin extends sequelize_typescript_1.Model {
    username;
    email;
    password;
    role;
    creatorSocial;
    donation;
    notification;
    Roles;
    product;
};
exports.Admin = Admin;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Admin.prototype, "username", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Admin.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Admin.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Admin.prototype, "role", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => creator_social_model_1.CreatorSocial),
    __metadata("design:type", creator_social_model_1.CreatorSocial)
], Admin.prototype, "creatorSocial", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => donation_model_1.Donation),
    __metadata("design:type", donation_model_1.Donation)
], Admin.prototype, "donation", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => notification_model_1.Notification),
    __metadata("design:type", notification_model_1.Notification)
], Admin.prototype, "notification", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => role_model_1.Roles, () => user_role_model_1.UserRole),
    __metadata("design:type", Array)
], Admin.prototype, "Roles", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => product_model_1.Product),
    __metadata("design:type", product_model_1.Product)
], Admin.prototype, "product", void 0);
exports.Admin = Admin = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'admins' })
], Admin);
//# sourceMappingURL=admin.model.js.map