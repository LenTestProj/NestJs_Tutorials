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
exports.SongsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const song_entity_1 = require("./song.entity");
const typeorm_2 = require("@nestjs/typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
let SongsService = class SongsService {
    constructor(songRepository) {
        this.songRepository = songRepository;
        this.songs = [];
    }
    async create(songDTO) {
        const song = new song_entity_1.Song();
        song.title = songDTO.title;
        song.artists = songDTO.artists;
        song.duration = songDTO.duration;
        song.lyrics = songDTO.lyrics;
        song.releasedDate = songDTO.releasedDate;
        return await this.songRepository.save(song);
    }
    findAll() {
        return this.songRepository.find();
    }
    findOne(id) {
        return this.songRepository.findOneBy({ id: id });
    }
    update(id, recordToUpdate) {
        return this.songRepository.update(id, recordToUpdate);
    }
    remove(id) {
        return this.songRepository.delete(id);
    }
    paginate(options) {
        const queryBuilder = this.songRepository.createQueryBuilder('c');
        queryBuilder.orderBy('c.releasedDate', 'DESC');
        return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options);
    }
};
SongsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(song_entity_1.Song)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SongsService);
exports.SongsService = SongsService;
//# sourceMappingURL=songs.service.js.map