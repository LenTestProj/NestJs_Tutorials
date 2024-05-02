import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Playlist } from "./playlist.entity";
import { Repository } from "typeorm";
import { Song } from "src/songs/song.entity";
import { User } from "src/user/user.entity";
import { CreatePlayListDto } from "./dto/create-playlist.dto";

@Injectable()
export class PlayListService{
    constructor(
        @InjectRepository(Playlist)
        private playListRepo:Repository<Playlist>,
        @InjectRepository(Song)
        private songRepo:Repository<Song>,
        @InjectRepository(User)
        private userRepo:Repository<User>
    ){}

    // async create(playListDTO:CreatePlayListDto):Promise<Playlist>{
    //     const playList=new Playlist();
    //     playList.name=playListDTO.name;

    //     //songs will be hte array of ids taht we are getting from the DTO Object
    //     const songs=await this.songRepo.findByIds(playListDTO.songs);

    //     //set the realtion of the songs with the playlist entity
    //     playList.songs=songs;

    //     //A user will be the Id of the user we are getting from the request
    //     //when we implement the user auhtentication this id will beome the loggedIn
    //     const user=await this.userRepo.findOneBy({id:playListDTO.user});
    //     playList.user=user;
    //     return this.playListRepo.save(playList);
    // }
}