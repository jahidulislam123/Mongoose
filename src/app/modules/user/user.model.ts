import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

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



 export default User;