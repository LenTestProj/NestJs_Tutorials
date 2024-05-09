import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDTO } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/user/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ArtistService } from 'src/artist/artist.service';
import { PayloadType } from './types';

@Injectable()
export class AuthService {
    constructor(private userService:UserService,private jwtService:JwtService,private artistsService:ArtistService){}

    async login(loginDto:LoginDTO):Promise<{accessToken:string}>{
        const user=await this.userService.findOne(loginDto);
        const passwordMatched=await bcrypt.compare(loginDto.password,user.password);
        if(passwordMatched){
            delete user.password;
            const payload:PayloadType={email:user.email,userId:user.id}
            const artist=await this.artistsService.findArtist(user.id);
            if(artist){
                payload.artistId=artist.id;
            }
            return {
                accessToken:this.jwtService.sign(payload)
            };    
        }
        else{
            throw new UnauthorizedException("Password does not match");
        }
    }

}
