import { CreateUserDTO } from "./dto/create-user.dto";
import { Repository } from "typeorm";
import { User } from "./user.entity";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(userDTO: CreateUserDTO): Promise<User>;
}
