import express from "express"
import { createUser, getUser } from "./user.controller";
const router = express.Router();



router.get('/',getUser)
// ekhan theke 

// CREATE USER TA ASTE CONTROLLLER THEKE 
router.post('/creat-user',createUser)

export default router;