import { Body, Controller, DefaultValuePipe, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/constant';
import { Song } from './song.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateSongDTO } from './dto/update-song-dto';
import { Pagination } from 'nestjs-typeorm-paginate';

@Controller('songs')
export class SongsController {
    constructor(
        private songsService:SongsService,
        @Inject('CONNECTION')
        private connection:Connection
    ){
        console.log('This is connection string: '+this.connection.CONNECTION_STRING);
        
    };
    @Post()
    create(@Body() createSongDTO:CreateSongDTO){
        return this.songsService.create(createSongDTO);
    }

    @Get()
    findAll(
        @Query('page',new DefaultValuePipe(1),ParseIntPipe) page:number=1,
        @Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit:number=10
     ):Promise<Pagination<Song>>{
        try {
            limit=limit>100?100:limit;
            return this.songsService.paginate({page,limit});    
        } catch (error) {
            throw new HttpException("server error: ",HttpStatus.INTERNAL_SERVER_ERROR)
        }
        
    }

    @Get(":id")
    findOne(
        @Param('id', new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number,
    ):Promise<Song>{
        return this.songsService.findOne(id);
    }

    @Put(":id")
    update(
        @Param('id', new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id:number,
        @Body() updateSongDTO:UpdateSongDTO
    ):Promise<UpdateResult>{
        return this.songsService.update(id,updateSongDTO)
    }

    @Delete(":id")
    delete(@Param('id', new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number):Promise<DeleteResult>{
        return this.songsService.remove(id)
    }
    
}
