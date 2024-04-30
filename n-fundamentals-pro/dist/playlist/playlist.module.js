"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayListModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const song_entity_1 = require("../songs/song.entity");
const user_entity_1 = require("../user/user.entity");
const playlist_entity_1 = require("./playlist.entity");
const playlist_controller_1 = require("./playlist.controller");
const playlist_services_1 = require("./playlist.services");
let PlayListModule = class PlayListModule {
};
PlayListModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([playlist_entity_1.Playlist, song_entity_1.Song, user_entity_1.User])],
        controllers: [playlist_controller_1.playListController],
        providers: [playlist_services_1.PlayListService]
    })
], PlayListModule);
exports.PlayListModule = PlayListModule;
//# sourceMappingURL=playlist.module.js.map