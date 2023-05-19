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
  const user =new User(paylos)  // ekhane User hocce ekta class // user hocce instance


  await user.save();  // user er sathe method ace etai instance method
  // eta mongoose dice tai etar nam build in instancce method 
user.fullName(); //custom instance method
console.log(user.fullName())

  console.log(user)
  return user;
  
  }


  export const getUserFromDB = async():Promise<IUser[]>  =>{
    const users =await User.find();
    return users;
  }


export const userGetIdFromDB = async(payload:string | null):Promise<IUser |null > =>{
    const user=await User.findOne({id:payload},{name:1});
    return user;
}

schema.static('getUserAdmins', function getAdminUser() {
  const [firstName, lastName] = name.split(' ');
  return this.create({ firstName, lastName });
});


export const getAllAdminUsers = async(payload:string | null):Promise<IUser[] > =>{
    // amake ekhane new instance method toiri korte hobe 
    // const user1 = new User(); 
    // static use korle ar instance use korte hobe na 

    // ekane static take call dite hobe 


    const admins =await User.getAdmin()
     // static
}




// class -> attach -> Method -> directly call using class 
// user == new User
// user.   instance methods
// User.getAdminUser()