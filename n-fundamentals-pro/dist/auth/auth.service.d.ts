import { UserService } from 'src/user/user.service';
import { LoginDTO } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ArtistService } from 'src/artist/artist.service';
export declare class AuthService {
    private userService;
    private jwtService;
    private artistsService;
    constructor(userService: UserService, jwtService: JwtService, artistsService: ArtistService);
    login(loginDto: LoginDTO): Promise<{
        accessToken: string;
    }>;
}
