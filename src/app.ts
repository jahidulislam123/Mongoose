import express, { Application ,NextFunction,Request, Response} from 'express'
import cors from 'cors'
import { Schema  ,model} from 'mongoose';




const app : Application = express()
app.use(cors())


// parse data 
// jehetu data receive ba onno kicu korte hobe sehetw json er dorkar


app.use(express.json()) ;
app.use(express.urlencoded({extended:true}))



app.get('/', (req : Request, res : Response ,next:NextFunction) => {
    // res.send('Hello World!')

    // inserting a test data into mongodb

    // so amake age interface declare kortehobe
    /*
    step : interface toiri korbo 
    step2 : schema toiri korbo 
    step 3 : model toiri korbo 
    step 4 : database query toiri korbo 

    */

    // next()

    // creating an interface 
    interface IUser {
        id:string;
        role : "student";
        password : string;
        name : {
            firstName :string;
            middleName ?: string;
            lastName :string;
        }
        dateOfBirt? : string ;
        gender : "male " | 'female ';
        email ? : string;
        contackNo :string;
        emergencyContackName :string;
        presentAddress : string;
        permanentAdress :string;
    }



    // 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    id:{
        type :String,
        required:true,
        unique:true,

    },
    role:{
        type:String,
        required :true,
       

    },
    password:{
        type:String,
        required:true


    },
    name: { 
        firstName :{
            type:String,
            required :true
        },
        middleName :{
            type:String
        },
        lastName:{
            type:String,
            required : true
        }
     },
     dateOfBirt:{
        type:String,
            
     },
     gender:{
        type:String,
        enum:['male','female'],
        required:true

     },
     email:{
        type:String,
            
     },
     contackNo:{
        type:String,
        required:true
      
     }
     ,
     emergencyContackName:{
        type:String,
        required:true
     }
     ,
     presentAddress:{
        type:String
        ,
        required:true
     },
     permanentAdress:{
        type:String,
        required:true
     }
    
    
  });
  //model toiri korlam 
  const User =model<IUser>('User',userSchema);


  const createUserToDB = async ()=>{

    const user = new User({
        id:'777',
        role : "student",
        password : 'jakanaka',
        name : {
            firstName :'jahidul',
            middleName : 'islam',
            lastName :'vai'
        },
        
        gender : "male ",
        email : 'abc@gmail.com',
        contackNo :'23434534',
        emergencyContackName :'23454',
        presentAddress : 'uganda',
        permanentAdress :'usa',
  });
  await user.save();
  
  }

 createUserToDB();
 console.log(User)

 });



  export default app;
