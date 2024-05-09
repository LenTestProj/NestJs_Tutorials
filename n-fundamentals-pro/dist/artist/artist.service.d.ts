import { Repository } from 'typeorm';
import { Artist } from './artist.entity';
export declare class ArtistService {
    private artistRepo;
    constructor(artistRepo: Repository<Artist>);
    findArtist(userId: number): Promise<Artist>;
}
