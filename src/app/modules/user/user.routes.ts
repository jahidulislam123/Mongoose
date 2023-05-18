import express from "express"
import { createUser, getUser, getUserById } from "./user.controller";
const router = express.Router();



router.get('/',getUser)
// ekhan theke 

// CREATE USER TA ASTE CONTROLLLER THEKE 
router.post('/creat-user',createUser)
router.get('/:id',getUserById);
export default router;