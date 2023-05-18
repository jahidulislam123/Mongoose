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