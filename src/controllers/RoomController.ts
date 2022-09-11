import {Request, Response} from 'express'
import { roomRepository } from '../repositories/RoomRepository'
import { videoRepository } from '../repositories/VideoRepository'



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

  async CreateVideo (req : Request, res: Response){
    const {title , url} = req.body
    const {idRoom} = req.params

    try {
      //const room = roomRepository.findOne({where : {id: Number(idRoom)}})
        const room = await roomRepository.findOneBy({id: Number(idRoom)})

        if(!room){
           return res.status(404).json({message: 'Aula não existe.'})
        }
      
        const newVideo = videoRepository.create({
          title,
          url,
          room
        })
       await videoRepository.save(newVideo)
       return res.status(201).json(newVideo)
 
    } catch (error) {
 
       console.log(error)
       return res.status(500).json('Internal Server Error.')
       
    }  
   }
}