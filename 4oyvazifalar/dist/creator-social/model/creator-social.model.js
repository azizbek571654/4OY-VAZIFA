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
exports.CreatorSocial = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const admin_model_1 = require("../../admin/model/admin.model");
const social_model_1 = require("../../social/model/social.model");
let CreatorSocial = class CreatorSocial extends sequelize_typescript_1.Model {
    creator_id;
    admin;
    social_id;
    social;
    url;
};
exports.CreatorSocial = CreatorSocial;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => admin_model_1.Admin),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", Number)
], CreatorSocial.prototype, "creator_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => admin_model_1.Admin, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", admin_model_1.Admin)
], CreatorSocial.prototype, "admin", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => social_model_1.Social),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", Number)
], CreatorSocial.prototype, "social_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => social_model_1.Social, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", social_model_1.Social)
], CreatorSocial.prototype, "social", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], CreatorSocial.prototype, "url", void 0);
exports.CreatorSocial = CreatorSocial = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'CreatorSocials' })
], CreatorSocial);
//# sourceMappingURL=creator-social.model.js.map