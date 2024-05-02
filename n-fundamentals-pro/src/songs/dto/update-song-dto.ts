import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateSongDTO{
    @IsString()
    @IsOptional()
    readonly title:string;

    @IsOptional()
    @IsArray()
    @IsString({each:true})
    readonly artists:string[];

    @IsOptional()
    @IsDateString()
    readonly releasedDate:Date;

    @IsMilitaryTime()
    @IsOptional()
    readonly duration:Date;

    @IsOptional()
    @IsString()
    readonly lyrics:string;
}