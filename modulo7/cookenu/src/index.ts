import {app} from "./app"
import { recipeRouter } from "./routes/RecipesRouter"
import { userRouter } from "./routes/UserRouter"

app.use("/user", userRouter)

app.use("/recipe", recipeRouter)