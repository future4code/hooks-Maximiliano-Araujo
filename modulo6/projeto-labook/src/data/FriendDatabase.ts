import { friend } from "../types/friend";
import BaseDatabase from "./BaseDatabase";

export class FriendDatabase extends BaseDatabase {
  public async createFriend(friendship: friend) {
    await BaseDatabase.connection("labook_friends").insert({
      id_user: friendship.idUser,
      id_friend: friendship.idFriend,
    });
  }

  public async deleteFriendship(idUser: string, idFriend: string) {
    await BaseDatabase.connection("labook_friends")
      .where({ id_user: idUser, id_friend: idFriend })
      .del();
  }

  public async showPostsFriend(idFriend: string) {
    const result = await BaseDatabase.connection.raw(`
         SELECT labook_friends.id_friend, labook_users.name as Usuário, labook_posts.photo,
             labook_posts.description, labook_posts.created_at, labook_posts.type 
             FROM labook_friends
             INNER JOIN labook_users ON labook_friends.id_friend = labook_users.id
             INNER JOIN labook_posts ON labook_friends.id_friend = labook_posts.author_id
             WHERE labook_friends.id_user = "${idFriend}"
             ORDER BY created_at DESC;
     `);

    return result;
  }
}
