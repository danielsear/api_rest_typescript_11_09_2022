import {Router} from 'express'
import { RoomController } from './controllers/RoomController'
import { SubjectController } from './controllers/SubjectController'




const routes = Router()

routes.post('/subject', new SubjectController().Create)
routes.post('/room', new RoomController().Create)
routes.post('/room/:idRoom/create',new RoomController().CreateVideo)
routes.post('/room/:idRoom/subject',new RoomController().RoomSubject)
routes.get('/room',new RoomController().List)





export default routes