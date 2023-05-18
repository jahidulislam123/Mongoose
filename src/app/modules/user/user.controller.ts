import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserFromDB, userGetIdFromDB } from "./user.service";


export const createUser =async (
    req : Request, 
    res : Response ,
    next:NextFunction
    ) => {
   const data =req.body;
const user =await createUserToDB(data)
res.status(200).json({
    status : "success",
    data:user
});

}




// new controller 
export const getUser =async (
    req : Request,
     res : Response ,
     next:NextFunction
     ) => {
   
    const user =await getUserFromDB()
    res.status(200).json({
        status : "success",
        data:user
    });
    
    }


    export const getUserById =async (
        req : Request,
         res : Response ,
         next:NextFunction
         ) => {
       const {id}=req.params;
        const user =await userGetIdFromDB(id)
        res.status(200).json({
            status : "success",
            data:user
        });
        
        }
    

// pattern ta hobe erokom 
// route call dibe controller ke
// controller call dibe service ke 