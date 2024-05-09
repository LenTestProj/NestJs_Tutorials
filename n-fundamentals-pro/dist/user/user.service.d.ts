import { CreateUserDTO } from "./dto/create-user.dto";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { LoginDTO } from "src/auth/dto/login.dto";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(userDTO: CreateUserDTO): Promise<User>;
    findOne(data: LoginDTO): Promise<User>;
}
