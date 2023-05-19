import { HydratedDocument, Model } from "mongoose";







export interface IUser {
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




// Put all user instance methods in this interface:
export interface IUserMethods {
    fullName(): string;
  }




interface UserModel extends Model<IUser, {}, IUserMethods> {
    createWithFullName(name: string): Promise<HydratedDocument<IUser, IUserMethods>>;
  }  