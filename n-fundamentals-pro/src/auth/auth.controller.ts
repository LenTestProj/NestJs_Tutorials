import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginDTO } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService,private authService:AuthService){} 
    
    @Post('signup')
    signup(@Body() userDTO:CreateUserDTO):Promise<User>{
        return this.userService.create(userDTO)
    }   

    @Post('login')
    login(@Body() loginDTo:LoginDTO):Promise<User>{
        return this.authService.login(loginDTo);
    }
}
