import { FriendDatabase } from "../data/FriendDatabase";
import { friend } from "../types/friend";

export class FriendBusiness {
  public async createFriendship(friend: friend) {
    if (!friend.idUser || !friend.idFriend) {
      throw new Error("Por favor, informe um ID válido");
    }

    const friendDatabase = new FriendDatabase();
    await friendDatabase.createFriend(friend);
  }

  // DELETANDO FRIEND
  public async deleteFriendship(idUser: string, idFriend: string) {
    if (!idUser || !idFriend) {
      throw new Error("Por favor, informe um ID válido");
    }

    const friendDatabase = new FriendDatabase();
    await friendDatabase.deleteFriendship(idUser, idFriend);
  }

  // ACHANDO POST DO FRIEND
  public async showPostsFriend(idFriend: string) {
    const friendDatabase = new FriendDatabase();
    const result = await friendDatabase.showPostsFriend(idFriend);

    return result;
  }
}
