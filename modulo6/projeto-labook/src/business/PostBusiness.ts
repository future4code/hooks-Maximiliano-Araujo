import { PostDatabase } from "../data/PostDatabase";
import { generateId } from "../services/generateId";
import { POST_TYPES } from "../types/enumPost";
import { post } from "../types/post";

export class PostBusiness {
  public async post(
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
  ) {
    if (!photo || !description || !type || !authorId) {
      throw new Error("Por favor, informe um parâmetro.");
    }

    const post = {
      id: generateId(),
      photo,
      description,
      type,
      authorId,
    };

    const postDatabase = new PostDatabase();
    await postDatabase.post(post);
  }

  public async getPostById(id: string) {
    const postDatabase = new PostDatabase();
    const result = await postDatabase.getPostById(id);

    return result;
  }
}
