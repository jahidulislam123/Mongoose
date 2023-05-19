import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";


// Create a new Model type that knows about IUserMethods...
type UserModel = Model<IUser, {}, IUserMethods>;


const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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


  // class -> this. --> class
  userSchema.static('getAdminUser',async function getAdminUser() {
   const admins =await this.find({role:"admin"});
 });


  userSchema.method('fullName', function fullName() {
   return this.name.firstName + ' ' + this.name.lastName;
 });

//normar function bebohar korte hobe jodi ami this bebohar kori
  //model toiri korlam 
  const User =model<IUser,UserModel>('User',userSchema);



 export default User;



//  instance method instance er method 
// class -> instance + method _> instance method 
