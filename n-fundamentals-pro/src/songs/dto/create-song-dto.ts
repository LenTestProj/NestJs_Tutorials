import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";

export class CreateSongDTO{
    @IsString()
    @IsNotEmpty()
    readonly title:string;

    @IsNotEmpty()
    @IsArray()
    @IsString({each:true})
    readonly artists:string[];

    @IsNotEmpty()
    @IsDateString()
    readonly releasedDate:Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration:Date;

    @IsNotEmpty()
    @IsString()
    readonly lyrics:string;
}