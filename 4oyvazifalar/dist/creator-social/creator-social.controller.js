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
exports.CreatorSocialController = void 0;
const common_1 = require("@nestjs/common");
const creator_social_service_1 = require("./creator-social.service");
const create_creator_social_dto_1 = require("./dto/create-creator-social.dto");
const update_creator_social_dto_1 = require("./dto/update-creator-social.dto");
let CreatorSocialController = class CreatorSocialController {
    creatorSocialService;
    constructor(creatorSocialService) {
        this.creatorSocialService = creatorSocialService;
    }
    create(createCreatorSocialDto) {
        return this.creatorSocialService.create(createCreatorSocialDto);
    }
    findAll() {
        return this.creatorSocialService.findAll();
    }
    findOne(id) {
        return this.creatorSocialService.findOne(+id);
    }
    update(id, updateCreatorSocialDto) {
        return this.creatorSocialService.update(+id, updateCreatorSocialDto);
    }
    remove(id) {
        return this.creatorSocialService.remove(+id);
    }
};
exports.CreatorSocialController = CreatorSocialController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_creator_social_dto_1.CreateCreatorSocialDto]),
    __metadata("design:returntype", void 0)
], CreatorSocialController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CreatorSocialController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CreatorSocialController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_creator_social_dto_1.UpdateCreatorSocialDto]),
    __metadata("design:returntype", void 0)
], CreatorSocialController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CreatorSocialController.prototype, "remove", null);
exports.CreatorSocialController = CreatorSocialController = __decorate([
    (0, common_1.Controller)('creator-social'),
    __metadata("design:paramtypes", [creator_social_service_1.CreatorSocialService])
], CreatorSocialController);
//# sourceMappingURL=creator-social.controller.js.map