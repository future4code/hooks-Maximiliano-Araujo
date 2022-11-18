import express, { Router }  from "express";
import { RecipesController } from "../controller/RecipesController";

export const recipeRouter = express.Router()

const recipeController = new RecipesController()

recipeRouter.post("/create", recipeController.createRecipe)

recipeRouter.get("/:id", recipeController.getRecipe)