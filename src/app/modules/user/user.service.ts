import User from "./user.model";

export const createUserToDB = async ()=>{
// ekhane normal export korci karon aro onk query hote pare ekhane 
    const user = await new User({
        // jeheto asysn function tai await dii 
        id:'7778',
        role :"student",
        password :'jakanaka',
        name : {
            firstName :'jahidul',
            middleName : 'islam',
            lastName :'vai'
        },

        gender : "male",
        email : 'abc@gmail.com',
        contackNo :'23434534',
        emergencyContackName :'23454',
        presentAddress : 'uganda',
        permanentAdress :'usa',
  });
  await user.save();
  console.log(user)
  
  }