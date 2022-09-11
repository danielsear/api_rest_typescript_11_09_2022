import {Request, Response} from 'express'
import { roomRepository } from '../repositories/RoomRepository'



export class RoomController{
  async Create (req : Request, res: Response){
   const {name , description} = req.body

   try {

      const newRoom = roomRepository.create({
        name,
        description
      })

      await roomRepository.save(newRoom)
      return res.status(201).json(newRoom)

   } catch (error) {
    
      console.log(error)
      return res.status(500).json('Internal Server Error.')
      
   }  
  }
}