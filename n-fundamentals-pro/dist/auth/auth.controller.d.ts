import { CreateUserDTO } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginDTO } from './dto/login.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    signup(userDTO: CreateUserDTO): Promise<User>;
    login(loginDTo: LoginDTO): Promise<any>;
}
