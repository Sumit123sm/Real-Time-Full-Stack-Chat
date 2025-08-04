import express from "express"
import { checkAuth, login, signup, updateprofile } from "../controllers/UserController.js"
import { proctectRoute } from "../middleware/auth.js"


const userRouter=express.Router()

userRouter.post("/signup",signup)
userRouter.post("/login",login)
userRouter.post("/update-profile",proctectRoute,updateprofile)
userRouter.get("/check",proctectRoute,checkAuth)


export default userRouter