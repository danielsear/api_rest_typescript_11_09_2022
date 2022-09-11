import {Router} from 'express'
import { RoomController } from './controllers/RoomController'
import { SubjectController } from './controllers/SubjectController'

const routes = Router()

routes.post('/subject', new SubjectController().Create)
routes.post('/room', new RoomController().Create)


export default routes