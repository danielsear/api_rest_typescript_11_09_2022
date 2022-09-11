
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import { Room } from './Room'

@Entity('videos')
export class Video {
  @PrimaryGeneratedColumn()
  id: number

  @Column({type: 'text'})
  title: string

  @Column({type: 'text'})
  url: string

  @Column({type: 'text', nullable: true})
  description: string

  @ManyToOne(()=> Room, room => room.videos)
  @JoinColumn({name: 'room_id'})
  room: Room
}