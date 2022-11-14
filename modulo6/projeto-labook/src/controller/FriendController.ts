import { Request, Response } from "express";
import { FriendBusiness } from "../business/FriendBusiness";

export class FriendController {
  async create(req: Request, res: Response) {
    try {
      const { idUser, idFriend } = req.body;

      const friendship = {
        idUser,
        idFriend,
      };

      const friendBusiness = new FriendBusiness();
      await friendBusiness.createFriendship(friendship);

      res.status(200).send("Amizade feita");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  // DELETANDO FRIEND

  async deleteFriendship(req: Request, res: Response) {
    try {
      const { idUser, idFriend } = req.body;

      const friendBusiness = new FriendBusiness();
      await friendBusiness.deleteFriendship(idUser, idFriend);

      res.status(200).send("Amizade desfeita");
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  // ACHANDO POST DO FRIEND

  async showPostsFriend(req: Request, res: Response) {
    try {
      const id = req.params.idFriend;

      const friendBusiness = new FriendBusiness();
      const result = await friendBusiness.showPostsFriend(id);

      res.status(200).send(result[0]);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
