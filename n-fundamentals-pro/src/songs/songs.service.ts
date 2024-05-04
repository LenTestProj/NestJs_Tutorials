import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Song } from './song.entity';
import { CreateSongDTO } from './dto/create-song-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateSongDTO } from './dto/update-song-dto';
import {paginate,Pagination,IPaginationOptions} from 'nestjs-typeorm-paginate';
import { Artist } from 'src/artist/artist.entity';

@Injectable()
export class SongsService {
    //local db
    //local array
    constructor(
        @InjectRepository(Song) private songRepository:Repository<Song>,
        @InjectRepository(Artist) private artistRepository:Repository<Artist>
    ){}
    private readonly songs=[];

    async create(songDTO:CreateSongDTO):Promise<Song>{
        const song=new Song();
        song.title=songDTO.title;
        song.artists=songDTO.artists;
        song.duration=songDTO.duration;
        song.lyrics=songDTO.lyrics;
        song.releasedDate=songDTO.releasedDate;
    
        //find all the artists based on ids
        const artists=await this.artistRepository.findByIds(songDTO.artists);

        //find the relation with the artist and the songs
        song.artists=artists;
        
        return await this.songRepository.save(song);
    }
    // create(song:any){
    //     this.songs.push(song);
    //     return this.songs;
    // }

    // findAll(){
    //     throw new Error("Error in db while fetching reocrd");
    //     return this.songs;
    // }

    findAll():Promise<Song[]>{
        return this.songRepository.find()    
    }

    findOne(id:number):Promise<Song>{
        return this.songRepository.findOneBy({id:id});
    }

    update(id:number, recordToUpdate:UpdateSongDTO):Promise<UpdateResult>{
        return this.songRepository.update(id,recordToUpdate);
    }

    remove(id:number):Promise<DeleteResult>{
        return this.songRepository.delete(id)
    }

    paginate(options:IPaginationOptions):Promise<Pagination<Song>>{
        const queryBuilder=this.songRepository.createQueryBuilder('c');
        queryBuilder.orderBy('c.releasedDate','DESC');
        return paginate<Song>(queryBuilder,options);
    }
}
