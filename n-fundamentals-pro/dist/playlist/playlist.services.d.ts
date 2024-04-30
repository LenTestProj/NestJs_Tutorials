import { Playlist } from "./playlist.entity";
import { Repository } from "typeorm";
import { Song } from "src/songs/song.entity";
import { User } from "src/user/user.entity";
import { CreatePlayListDto } from "./dto/create-playlist.dto";
export declare class PlayListService {
    private playListRepo;
    private songRepo;
    private userRepo;
    constructor(playListRepo: Repository<Playlist>, songRepo: Repository<Song>, userRepo: Repository<User>);
    create(playListDTO: CreatePlayListDto): Promise<Playlist>;
}
