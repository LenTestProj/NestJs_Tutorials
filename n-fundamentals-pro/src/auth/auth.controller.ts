import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService){} 
    
    @Post('signup')
    signup(@Body() userDTO:CreateUserDTO):Promise<User>{
        return this.userService.create(userDTO)
    }   
}
