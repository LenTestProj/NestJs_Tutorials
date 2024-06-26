import { ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
declare const ArtistJWTGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class ArtistJWTGuard extends ArtistJWTGuard_base {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    handleRequest<TUser = any>(err: any, user: any): TUser;
}
export {};
