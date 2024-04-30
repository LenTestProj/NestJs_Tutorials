import { PlayListService } from "./playlist.services";
import { CreatePlayListDto } from "./dto/create-playlist.dto";
import { Playlist } from "./playlist.entity";
export declare class playListController {
    private playListService;
    constructor(playListService: PlayListService);
    create(playListDto: CreatePlayListDto): Promise<Playlist>;
}
