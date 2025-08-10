import express from "express"
import { proctectRoute } from "../middleware/auth.js"
import { getMessages, getusersForSidebar, markmessageAsSeen, sendMessage } from "../controllers/messageController.js"

const messageRoute=express.Router()

messageRoute.get("/users",proctectRoute,getusersForSidebar)
messageRoute.get("/:id",proctectRoute,getMessages)
messageRoute.put("/mark/:id",proctectRoute,markmessageAsSeen)
messageRoute.post("/send/:id",proctectRoute,sendMessage)

export default messageRoute