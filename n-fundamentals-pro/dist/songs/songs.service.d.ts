import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Song } from './song.entity';
import { CreateSongDTO } from './dto/create-song-dto';
import { UpdateSongDTO } from './dto/update-song-dto';
export declare class SongsService {
    private songRepository;
    constructor(songRepository: Repository<Song>);
    private readonly songs;
    create(songDTO: CreateSongDTO): Promise<Song>;
    findAll(): Promise<Song[]>;
    findOne(id: number): Promise<Song>;
    update(id: number, recordToUpdate: UpdateSongDTO): Promise<UpdateResult>;
    remove(id: number): Promise<DeleteResult>;
}
