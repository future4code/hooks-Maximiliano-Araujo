import express from "express";
import cors from "cors";
import connection from "./database/connection";
import { User } from "./endpoints/types";

const app = express();

app.use(express.json());
app.use(cors());

//===================================================== Get
app.get("/users", async (req, res) => {
  let errorCode = 400

  try {
    const search = req.query.search

    if (search) {
      const result = await connection.raw(
        `SELECT * FROM Users
        WHERE name = "${search}"`
      )
      res.status(200).send(result[0])
    }

    const result = await connection.raw(
      `SELECT * FROM Users`
    )

    res.status(200).send(result[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

//===================================================== Post
app.post("/newUser", async (req, res) => {
  let errorCode = 400
  try {
    const { id, name, email } = req.body

    if (!name || !email) {
      throw new Error("Por favor, informe nome e email")
    }

    const newUser: User = {
      id: Number(Math.floor(Math.random() * 90)),
      name,
      email
    }
    await connection.raw(
      `INSERT INTO Users(id, name, email)
       VALUES(${newUser.id}, "${newUser.name}", "${newUser.email}")`
    )
    res.status(200).send("Usuário adicionado")

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

//===================================================== Put
app.put("/user/:id", async (req, res) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    const email = req.body.email

    if (!email) {
      throw new Error("Por favor, informe o email")
    }

    await connection.raw(
      `UPDATE Users
      SET email = "${email}"
      WHERE id = ${id}`
    )

    res.status(200).send("Email alterado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

//===================================================== DELETE
app.delete("/user/:id", async (req, res) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    const users = await connection.raw(
      `SELECT * FROM Users
      WHERE id = ${id}`
    )
    if (users[0].length === 0) {
      throw new Error("Usuário não encontrado")
    }

    await connection.raw(
      `DELETE FROM Users
      WHERE id = ${id}`
    )

    res.status(200).send("Usuário deletado")

  } catch (error) {
    res.status(errorCode).send(error.message)

  }
})

































app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});