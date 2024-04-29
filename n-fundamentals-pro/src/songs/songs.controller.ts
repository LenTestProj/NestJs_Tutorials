import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/constant';

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
    findAll(){
        try {
            return this.songsService.findAll();    
        } catch (error) {
            throw new HttpException("server error: ",HttpStatus.INTERNAL_SERVER_ERROR)
        }
        
    }

    @Get(":id")
    findOne(
        @Param('id', new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number,
    ){
        return 'fetch song based on the id specified: '+typeof id
    }

    @Put(":id")
    update(){
        return 'Update song based on Id'
    }

    @Delete(":id")
    delete(){
        return 'Delete song based on Id'
    }
    
}
