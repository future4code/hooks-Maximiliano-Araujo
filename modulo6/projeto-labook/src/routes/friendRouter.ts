import  express  from "express";
import { FriendController } from "../controller/FriendController";


export const friendRouter = express.Router()
const friendController = new FriendController

friendRouter.post("/create", friendController.create)
friendRouter.delete("/delete", friendController.deleteFriendship)
friendRouter.get("/get/:idFriend", friendController.showPostsFriend)


