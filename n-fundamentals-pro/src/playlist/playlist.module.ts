import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Song } from "src/songs/song.entity";
import { User } from "src/user/user.entity";
import { Playlist } from "./playlist.entity";
import { playListController } from "./playlist.controller";
import { PlayListService } from "./playlist.services";

@Module({
    imports:[TypeOrmModule.forFeature([Playlist,Song,User])],
    controllers:[playListController],
    providers:[PlayListService]
})
export class PlayListModule{}