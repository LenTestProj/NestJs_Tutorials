import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';
import { DevConfigService } from './common/providers/DevConfigService';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Song } from './songs/song.entity';
import { Artist } from './artist/artist.entity';
import { User } from './user/user.entity';
import { Playlist } from './playlist/playlist.entity';
import { PlayListModule } from './playlist/playlist.module';
import { DataSource } from 'typeorm';

const devConfig={port:3000};
const proConfig={port:4000};

@Module({
    imports: [SongsModule,PlayListModule,
        // TypeOrmModule.forRoot({
        //     type:'postgres',
        //     host:'localhost',
        //     port:5432,
        //     username:'postgres',
        //     password:'root',
        //     database:'Nestjs_Testing',
        //     entities:[Song,Artist,User,Playlist],
        //     synchronize:true
        // })
        TypeOrmModule.forRoot({
            type:'postgres',
            database:'spotify-clone',
            host:'localhost',
            port:5432,
            username:'postgres',
            password:'root',
            entities:[Song],
            synchronize:true
        }) 
    ],
    controllers: [AppController],
    providers: [AppService,{
        provide:DevConfigService,
        useClass:DevConfigService
    },{
        provide:'CONFIG',
        useFactory:()=>{
            console.log("process env is: ",process.env.NODE_ENV)
            return process.env.NODE_ENV==='development'?devConfig:proConfig
        }
    }],
})
export class AppModule implements NestModule{
    constructor(private dataSource:DataSource){
        console.log('dbName ',dataSource.driver.database)
    }
    
    configure(consumer: MiddlewareConsumer) {
        // consumer.apply(LoggerMiddleware).forRoutes('songs')
        // consumer.apply(LoggerMiddleware).forRoutes({path:'songs',method:RequestMethod.POST})
        consumer.apply(LoggerMiddleware).forRoutes(SongsController);
    }
}
