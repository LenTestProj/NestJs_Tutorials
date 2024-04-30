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
const songs_module_1 = require("./songs/songs.module");
const logger_middleware_1 = require("./common/middleware/logger/logger.middleware");
const songs_controller_1 = require("./songs/songs.controller");
const DevConfigService_1 = require("./common/providers/DevConfigService");
const typeorm_1 = require("@nestjs/typeorm");
const song_entity_1 = require("./songs/song.entity");
const artist_entity_1 = require("./artist/artist.entity");
const user_entity_1 = require("./user/user.entity");
const playlist_entity_1 = require("./playlist/playlist.entity");
const playlist_module_1 = require("./playlist/playlist.module");
const devConfig = { port: 3000 };
const proConfig = { port: 4000 };
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes(songs_controller_1.SongsController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [songs_module_1.SongsModule, playlist_module_1.PlayListModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'root',
                database: 'Nestjs_Testing',
                entities: [song_entity_1.Song, artist_entity_1.Artist, user_entity_1.User, playlist_entity_1.Playlist],
                synchronize: true
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, {
                provide: DevConfigService_1.DevConfigService,
                useClass: DevConfigService_1.DevConfigService
            }, {
                provide: 'CONFIG',
                useFactory: () => {
                    console.log("process env is: ", process.env.NODE_ENV);
                    return process.env.NODE_ENV === 'development' ? devConfig : proConfig;
                }
            }],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map