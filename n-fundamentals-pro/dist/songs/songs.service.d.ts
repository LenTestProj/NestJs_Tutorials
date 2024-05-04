import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Song } from './song.entity';
import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDTO } from './dto/update-song-dto';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { Artist } from 'src/artist/artist.entity';
export declare class SongsService {
    private songRepository;
    private artistRepository;
    constructor(songRepository: Repository<Song>, artistRepository: Repository<Artist>);
    private readonly songs;
    create(songDTO: CreateSongDTO): Promise<Song>;
    findAll(): Promise<Song[]>;
    findOne(id: number): Promise<Song>;
    update(id: number, recordToUpdate: UpdateSongDTO): Promise<UpdateResult>;
    remove(id: number): Promise<DeleteResult>;
    paginate(options: IPaginationOptions): Promise<Pagination<Song>>;
}
