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
exports.playListController = void 0;
const common_1 = require("@nestjs/common");
const playlist_services_1 = require("./playlist.services");
const create_playlist_dto_1 = require("./dto/create-playlist.dto");
let playListController = class playListController {
    constructor(playListService) {
        this.playListService = playListService;
    }
    create(playListDto) {
        return this.playListService.create(playListDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_playlist_dto_1.CreatePlayListDto]),
    __metadata("design:returntype", Promise)
], playListController.prototype, "create", null);
playListController = __decorate([
    (0, common_1.Controller)('playlist'),
    __metadata("design:paramtypes", [playlist_services_1.PlayListService])
], playListController);
exports.playListController = playListController;
//# sourceMappingURL=playlist.controller.js.map