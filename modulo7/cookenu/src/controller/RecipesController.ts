import { Request, Response } from "express";
import { RecipesBusiness } from "../business/RecipesBusiness";
import { RecipesDTO } from "../types/RecipesDTO";

const recipesBussiness = new RecipesBusiness();

export class RecipesController {
  async createRecipe(req: Request, res: Response) {
    try {
      const { title, description } = req.body;

      const token = req.headers.authorization as string;

      const newRecipe: RecipesDTO = {
        title,
        description,
      };

      await recipesBussiness.createRecipe(newRecipe, token);

      res.status(200).send({ recipe: `receita ${title} criada com sucesso.` });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async getRecipe(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const token = req.headers.authorization as string;

      const result = await recipesBussiness.getRecipe(id, token);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}
