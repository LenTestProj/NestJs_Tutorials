import { Artist } from "src/artist/artist.entity";
export declare class CreateSongDTO {
    readonly title: string;
    readonly artists: Artist[];
    readonly releasedDate: Date;
    readonly duration: Date;
    readonly lyrics: string;
}
