import { Artist } from 'src/artist/artist.entity';
export declare class Song {
    id: number;
    title: string;
    releasedDate: Date;
    duration: Date;
    lyrics: string;
    artists: Artist[];
}
