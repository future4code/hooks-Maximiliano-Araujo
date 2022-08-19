import  express, { Request , Response }  from "express";
import cors from "cors";
import { v4 as uuidV4 } from 'uuid';

const app = express()
app.use(express.json())
app.use(cors())

// 01 =======================================
app.get("/ping", (req, res) => {
    res.send("pong")
})

// 02 =======================================
type toDo = {userId: number, id: number, title: string, completed: boolean}

// 03 =======================================
const toDoList: toDo [] = [
    {
        userId: 1,
        id: 1,
        title: "limpar casa",
        completed: true
    }, 
    {
        userId: 2,
        id: 2,
        title: "fazer comida",
        completed: false
    },
    {
        userId: 3,
        id: 3,
        title: "lavar louça",
        completed: true
    }
]

// 04 =======================================
app.get("/todos/:status", (req: Request, res: Response) => {
    const statusReq = (req.params.status)
    let complete : toDo[] = []
    toDoList.map((todo) => {
        if (todo.completed.toString() === statusReq) {
            complete.push(todo)
        }
    })
    res.send(complete)
})

// 05 =======================================
app.post("/add", (req: Request, res: Response) => {
    const title = req.body.title
    const newTask: toDo = {
        userId: req.body.userId,
        id: Date.now(),
        title,
        completed: false
    }
    toDoList.push(newTask)
    res.send(toDoList)
})

// 06 =======================================
app.put("/status/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const changeStatus = toDoList.map((todos) => {
        if (String(todos.id) === id) {
            todos.completed = !todos.completed
        }
    })
    console.log(changeStatus)
    res.send(changeStatus)
})
























app.listen(3003, () => {console.log("online")})
