import express from "express";
import cors from "cors";
import connection from "./database/connection";
import { send } from "process";

const app = express();

app.use(express.json());
app.use(cors());
//================================================= 0
app.get("/users", async (req, res) => {
  let errorCode = 404

  try {
    const users = await connection.raw(
      `SELECT * FROM aula48_exercicio`
    )
    res.status(200).send(users[0])

  } catch (error) {

    res.status(errorCode).send(error.message)
  }
})
//================================================= 1-A getUserByName
app.get("/user", async (req, res) => {
  let errorCode = 400

  try {
    const userName = req.query.userName as string

    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name = "${userName}"
      `)

    res.status(200).send(result[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//================================================= 1-B getUserByType
app.get("/userType/:type", async (req, res) => {
  let errorCode = 400

  try {
    const userType = req.params.type

    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE type = "${userType}"
      `)

    res.status(200).send(result[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//================================================= 2 getUserByOrder
app.get("/usersOrder", async (req, res) => {
  let errorCode = 404

  try {
    const userName = req.query.userName as string
    const userType = req.query.userType as string
    let sort = req.query.sort as string
    const order = req.query.order as string

    if (!sort) {
      sort = "email"
    }

    if (!order) {
      throw new Error("Por favor, passe uma coluna válida.")
    }

    if (userName) {
      const users = await connection.raw(
        `SELECT * FROM aula48_exercicio
        WHERE name = "${userName}" ORDER BY ${sort} ${order}
        `)

      res.status(200).send(users[0])
    } else if (userType) {
      const types = await connection.raw(
        `SELECT * FROM aula48_exercicio
        WHERE type = "${userType}" ORDER BY ${sort} ${order}
        `)
      res.status(200).send(types[0])
    }

  } catch (error) {

    res.status(errorCode).send(error.message)
  }
})
//================================================= 3 getPages
app.get("/pages", async (req, res) => {
  const codeError = 400
  try {

    let size = Number(req.query.size)
    let page = Number(req.query.page)
    let offset = size * (page - 1)

    const user = await connection.raw(`
    SELECT * FROM aula48_exercicio LIMIT ${size} OFFSET ${offset}
    `)

    res.status(200).send(user[0])
  } catch (error) {
    res.status(codeError).send(error.message)
  }
})
//================================================= 4 complete
app.get("/info", async (req, res) => {
  const errorCode = 400
  try {

    const userName = req.query.name || "%"
   
    const users = await connection.raw(
      `SELECT * FROM aula48_exercicio
      WHERE name LIKE "%${userName}%"
      `)
      res.status(200).send(users[0])


  } catch (error) {
    res.status(errorCode).send(error.mesage)
  }
})

















































































app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});