import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { authConstants } from './auth.constants';
import { JwtStrategy } from './jwt-strategy';
import { ArtistModule } from 'src/artist/artist.module';

@Module({
    imports:[UserModule,ArtistModule,JwtModule.register({secret:authConstants.secret, signOptions:{
        expiresIn:'1d'
    }})],
    providers: [AuthService,JwtStrategy],
    controllers: [AuthController],
    exports:[AuthService]
})
export class AuthModule {}
