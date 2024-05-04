import { CreateUserDTO } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
export declare class AuthController {
    private userService;
    constructor(userService: UserService);
    signup(userDTO: CreateUserDTO): Promise<User>;
}
