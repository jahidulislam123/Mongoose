const express = require('express')
const mongoose =require("mongoose")
const app = express()


const port = 5000



//database connection 
async function bootstrap() {
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/Practice_Mongoose")
  console.log("data base connection successfull")
  }catch(err){
    console.log("failed to connect databse",err)
  }
}

bootstrap()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})