import BaseDatabase from "./BaseDatabase";
import { Recipes } from "../types/Recipes";

export class RecipesDatabase extends BaseDatabase {
  public async createRecipe(recipe: Recipes) {
    await BaseDatabase.connection("recipes").insert({
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
    });
  }

  public async getRecipe(id: string) {
    const getRecipes = await BaseDatabase.connection("recipes")
      .select()
      .where({ id });

    return getRecipes[0];
  }
}
