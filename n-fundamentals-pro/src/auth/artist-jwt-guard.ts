import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class ArtistJWTGuard extends AuthGuard('jwt'){
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        return super.canActivate(context)
    }

    handleRequest<TUser = any>(err: any, user: any): TUser {
        if(err || !user){
            throw err || new UnauthorizedException();
        }  
        console.log("user in artist guard is: ",user);  
        if(user.artistId){
            return user;
        }
        throw err || new UnauthorizedException;
    }
}