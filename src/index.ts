import express from 'express'
import { AppDataSource } from './data-source'

AppDataSource.initialize().then(()=>{
  const app = express()

  app.use(express.json())

  app.get('/', (req, res) => {
    return res.json('Conectado!')
  })

  return app.listen(process.env.PORT, ()=> {
    console.log('Conectado no banco de dados com sucesso!');
    
  })

})