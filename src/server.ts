
import mongoose from 'mongoose'
import app from './app'
const port :number = 5000

//cors take use korteci setake bole ditece 




//database connection 
async function bootstrap() {
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/Practice_Mongoose")
  console.log("data base connection successfull")
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  })
  }catch(err){
    console.log("failed to connect databse",err)
  }
}

bootstrap()
