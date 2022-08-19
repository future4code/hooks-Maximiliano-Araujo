import express from "express"
import cors from "cors"
import { user } from "./data"
import { post } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

// app.get( "/users", (req,res) => {
//     res.send(user)
// })

// app.get( "/post", (req, res) => {
//     res.send(post)
// })

app.get( "/post/:id", (req, res) => {
    const idPost = Number(req.params.id)
    const postId = post.map((postagem) => {
        if (idPost === postagem.userId) {
            res.send(postagem)           
        }
    })
    res.send(postId)
})



// app.get("/user", (req, res) => {
//     res.send({
//         id: 1,
//         name: "Max",
//         phone: "90943093409430",
//         email: "max@email.com",
//         website: "max.com.br"
//     })
// })


// app.get( "/users", (req, res) => {
//     const authentication = req.headers.authentication
//     if (authentication === "entry") {
//         res.send("O valor é de entrada")
//     } else {
//         res.send("O valor não é de entrada")
//     }
// })

app.listen(3003, () => console.log("online"))