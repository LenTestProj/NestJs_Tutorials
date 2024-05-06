import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDTO } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
    constructor(private userService:UserService){}

    async login(loginDto:LoginDTO):Promise<User>{
        const user=await this.userService.findOne(loginDto);
        const passwordMatched=await bcrypt.compare(loginDto.password,user.password);
        if(passwordMatched){
            delete user.password;
            return user;    
        }
        else{
            throw new UnauthorizedException("Password does not match");
        }
    }
}
