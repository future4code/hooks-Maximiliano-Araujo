import express from "express";
import cors from "cors";
import { User } from "./endpoints/types";
import { Task } from "./endpoints/types";
import { TODOS } from "./endpoints/types";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());
//======================================================= 00-GetAllTasks
app.get("/tasks", async (req, res) => {
  let errorCode = 400
  try {
    const result = await connection.raw(
      `SELECT * FROM tasks`
    )
    res.status(200).send(result[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//======================================================= 01-CreateUser
app.post("/createUser", async (req, res) => {
  let errorCode = 400
  try {
    const name = req.body.name
    const nickname = req.body.nickname
    const email = req.body.email

    if (!name) {
      throw new Error("Por favor, informe o nome.")
    } else if (!nickname) {
      throw new Error("Por favor, informe o apelido.")
    } else if (!email) {
      throw new Error("Por favor, informe o email.")
    }

    const newUser: User = {
      id: Number(Date.now()),
      name: name,
      nickname: nickname,
      email: email
    }

    await connection.raw(
      ` INSERT INTO todoList(id, name, nickname, email)
      VALUES(${newUser.id}, 
        "${newUser.name}", 
        "${newUser.nickname}", 
        "${newUser.email}")`
    )

    res.status(200).send("Usuário adicionado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }

})
//======================================================= 02-GetUserById
app.get("/user", async (req, res) => {
  let errorCode = 400
  try {
    let id = Number(req.query.id)

    let resultId = await connection.raw(
      `SELECT id , name FROM todoList
      WHERE id = ${id}`
    )

    if (resultId[0].length === 0) {
      throw new Error("Por favor, informe um ID válido.") 
    }
      
   if (id) {
      res.status(200).send(resultId[0])
    }

    

  } catch (error) {
    res.status(errorCode).send(error.message)
  }

})
//======================================================= 03-EditUser
app.put("/updateUser", async (req, res) => {
  const errorCode = 400
  try {
    const id = Number(req.query.id)
    const name = req.body.name
    const nickname = req.body.nickname

    if (!name) {
      throw new Error("Por favor, informe o nome.")
    } else if(!nickname) {
      throw new Error("Por favor, informe o apelido.")
    } 

    await connection.raw(
      `Update todoList
      Set name = "${name}",
      nickname = "${nickname}"
      WHERE id = ${id}`
    )
    res.status(200).send("Usuário alterado")

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//======================================================= 04-CreateTask
app.post("/createTask", async (req, res) => {
  const errorCode = 400
  try {
    //const idUser = Number(req.query.idUser)
    const title = req.body.title
    const description = req.body.description
    const status = req.body.status
    const limit_date = req.body.limitDate
    const userId = Number(req.body.userId)

    if (!title) {
      throw new Error("Por favor, informe o título da tarefa.")
    } else if (!description) {
      throw new Error("por favor, informe uma descrição.")
    } else if (!status) {
      throw new Error("Por favor, informe o status.")
    } else if (!limit_date) {
      throw new Error("Por favor, informe uma data limite.")
    } else if (!userId) {
      throw new Error("por favor, informe o ID do usuário.")
    }

    const newTask: Task = {
      id: Number(Date.now()),
      title: title,
      description: description,
      status: status,
      limit_date: limit_date,
      creator_user_id: userId,
    }

    await connection.raw(
      `INSERT INTO tasks(id, title, description, status, limit_date, creator_user_id)
      VALUES(
        ${newTask.id},
        "${newTask.title}",
        "${newTask.description}",
        "${newTask.status}",
        "${newTask.limit_date}",
        ${newTask.creator_user_id}
      )`
    )

    res.status(200).send("Task adicionada")

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//======================================================= 05-GetTaskById
app.get("/getTask", async (req, res) => {
  const errorCode = 400
  try {
    const id = req.query.id

    if (id) {
      const taskId = await connection.raw(
        `SELECT * FROM tasks
      WHERE id = ${id}`
      )

      res.status(200).send(taskId[0])
    }
    const taskId = await connection.raw(
      `SELECT * FROM tasks`
    )

    res.status(200).send(taskId[0])


  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//======================================================= 06-GetAllUsers
app.get("/users", async (req, res) => {
  let errorCode = 400
  try {
    const result = await connection.raw(
      `SELECT * FROM todoList`
    )
    res.status(200).send(result[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
























































































app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});