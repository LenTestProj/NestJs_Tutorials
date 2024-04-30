import { Body, Controller, Post } from "@nestjs/common";
import { PlayListService } from "./playlist.services";
import { CreatePlayListDto } from "./dto/create-playlist.dto";
import { Playlist } from "./playlist.entity";

@Controller('playlist')
export class playListController{
    constructor(private playListService:PlayListService){}

    @Post()
    create(@Body() playListDto:CreatePlayListDto):Promise<Playlist>{
        return this.playListService.create(playListDto)
    }
}