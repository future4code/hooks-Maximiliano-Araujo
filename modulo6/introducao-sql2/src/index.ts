import express from "express";
import cors from "cors";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/teste", (req, res) => {
  res.send("ok")
})

app.get("/users", async (req, res) => {
  const result = await connection.raw(
      `SELECT * FROM Users`
  )
  
  res.status(200).send(result[0])
  })