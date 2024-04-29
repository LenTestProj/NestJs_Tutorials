import { Playlist } from "src/playlist/playlist.entity";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @OneToMany(()=>Playlist,(playlist)=>playlist.user)
    playLists:Playlist[];
}