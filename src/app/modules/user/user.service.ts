import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (paylos:IUser)
:Promise<IUser>=>{
// ekhane normal export korci karon aro onk query hote pare ekhane 
    // const user = await new User({
        // jeheto asysn function tai await dii 
        // id:'77789',
        // role :"student",
        // password :'jakanaka',
        // name : {
        //     firstName :'jahidul',
        //     middleName : 'islam',
        //     lastName :'vai'
        // },

        // gender : "male",
        // email : 'abc@gmail.com',
        // contackNo :'23434534',
        // emergencyContackName :'23454',
        // presentAddress : 'uganda',
        // permanentAdress :'usa',
        // ekhon ar data directly pathabo na 
//   });
  const user =new User(paylos)
  await user.save();
  console.log(user)
  return user;
  
  }


  export const getUserFromDB = async():Promise<IUser[]>  =>{
    const users =await User.find();
    return users;
  }



