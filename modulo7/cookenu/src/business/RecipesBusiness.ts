import { RecipesDTO } from "../types/RecipesDTO";
import { RecipesDatabase } from "../database/RecipesDatabase";
import { generateId } from "../services/GenerateId";
import { Recipes } from "../types/Recipes";
import { Authenticator } from "../services/Authenticator";
import moment from "moment";

const recipesDatabase = new RecipesDatabase();
const authenticator = new Authenticator();

export class RecipesBusiness {
  async createRecipe(recipe: RecipesDTO, token: string) {
    try {
      const { title, description } = recipe;
      const tokenAuthentication = authenticator.getData(token);

      if (!tokenAuthentication.id) {
        throw new Error("token inválido");
      }

      const id = generateId();

      const newRecipe: Recipes = {
        id,
        title,
        description,
      };

      await recipesDatabase.createRecipe(newRecipe);
    } catch (error) {
      return error.message;
    }
  }

  async getRecipe(id: string, token: string) {
    try {
      const tokenAuthentication = authenticator.getData(token);

      if (!tokenAuthentication.id) {
        throw new Error("token inválido");
      }

      const result = await recipesDatabase.getRecipe(id);

      result.date = moment(result.date).format("DD/MM/YYYY")
      
      return result;
    } catch (error) {
      return error.message;
    }
  }
}
