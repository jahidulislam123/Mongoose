import express, { Application} from 'express'
import cors from 'cors'

import userRouter from './app/modules/user/user.routes'



const app : Application = express()
app.use(cors())


// parse data 
// jehetu data receive ba onno kicu korte hobe sehetw json er dorkar


app.use(express.json()) ;
app.use(express.urlencoded({extended:true}))



// app.get('/api/v1/user',userRouter );
app.use('/api/v1/user',userRouter)



  export default app;


//   // jake jake break down korci 

//   interface    interface.ts
//   shema , model  model.ts 
//   route 
//   route function  controller .ts 
//   data base logic gulake   service 