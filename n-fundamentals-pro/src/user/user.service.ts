import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService{
    constructor(@InjectRepository(User) private userRepository:Repository<User>){}

    async create(userDTO:CreateUserDTO):Promise<User>{
        const salt=await bcrypt.genSalt();
        userDTO.password=await bcrypt.hash(userDTO.password,salt);
        const user=await this.userRepository.save(userDTO);
        delete user.password;
        return user;
    }
}