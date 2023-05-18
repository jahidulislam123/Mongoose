import express from "express"
import { createUser } from "./user.controller";
const router = express.Router();



router.get('/',createUser)

// CREATE USER TA ASTE CONTROLLLER THEKE 


export default router;