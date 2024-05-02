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
exports.SongsController = void 0;
const common_1 = require("@nestjs/common");
const songs_service_1 = require("./songs.service");
const create_song_dto_1 = require("./dto/create-song-dto");
const update_song_dto_1 = require("./dto/update-song-dto");
let SongsController = class SongsController {
    constructor(songsService, connection) {
        this.songsService = songsService;
        this.connection = connection;
        console.log('This is connection string: ' + this.connection.CONNECTION_STRING);
    }
    ;
    create(createSongDTO) {
        return this.songsService.create(createSongDTO);
    }
    findAll() {
        try {
            return this.songsService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException("server error: ", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    findOne(id) {
        return this.songsService.findOne(id);
    }
    update(id, updateSongDTO) {
        return this.songsService.update(id, updateSongDTO);
    }
    delete(id) {
        return this.songsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_song_dto_1.CreateSongDTO]),
    __metadata("design:returntype", void 0)
], SongsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_song_dto_1.UpdateSongDTO]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SongsController.prototype, "delete", null);
SongsController = __decorate([
    (0, common_1.Controller)('songs'),
    __param(1, (0, common_1.Inject)('CONNECTION')),
    __metadata("design:paramtypes", [songs_service_1.SongsService, Object])
], SongsController);
exports.SongsController = SongsController;
//# sourceMappingURL=songs.controller.js.map