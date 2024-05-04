import { Artist } from 'src/artist/artist.entity';
import { Playlist } from 'src/playlist/playlist.entity';
import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity('songs')  //songs is the name in the database table
export class Song{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column({type:"date"})
    releasedDate:Date;

    @Column({type:'time'})
    duration:Date;

    @Column({type:"text"})
    lyrics:string;

    @Column("varchar",{array:true})
    // artists:String[]
    @ManyToMany(()=>Artist,(artist)=>artist.songs,{cascade:true})
    @JoinTable({name:'songs_artists'})
    artists:Artist[];

    // @ManyToOne(()=>Playlist,(playList)=>playList.songs)
    // playList:Playlist
}