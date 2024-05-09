import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/constant';
import { Song } from './song.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateSongDTO } from './dto/update-song-dto';
import { Pagination } from 'nestjs-typeorm-paginate';
export declare class SongsController {
    private songsService;
    private connection;
    constructor(songsService: SongsService, connection: Connection);
    create(createSongDTO: CreateSongDTO, request: any): Promise<Song>;
    findAll(page?: number, limit?: number): Promise<Pagination<Song>>;
    findOne(id: number): Promise<Song>;
    update(id: number, updateSongDTO: UpdateSongDTO): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
