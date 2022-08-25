import express from "express";
import { users } from "./data";
import { Users } from "./data";

import { AddressInfo } from "net";

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;


app.get("/testando", (req, res) => {
    res.send("tá funcionando.")
})

// 01 ============================================
app.get("/users", (req, res) => {
    res.send(users)
})

// 02 ============================================
app.get("/user/:type", (req, res) => {
    const type = req.params.type
    const arrayType: Users[] = []
    users.map((acess) => {
        if (type === acess.type) {
            arrayType.push(acess)
        }
    })
    res.send(arrayType)
})

// 03 ============================================
app.get("/name/:person", (req, res) => {
    const name = req.params.person

    const person = users.filter((user) => {
        if (user.name === name) {
            res.send(user)
        }
    })
    res.send(person)
})

// 04 ============================================
app.post("/add", (req, res) => {
    const addId = req.body.id
    const addName = req.body.name
    const addEmail = req.body.email
    const addType = req.body.type
    const addAge = req.body.age

    const newUser = {
        id: addId,
        name: addName,
        email: addEmail,
        type: addType,
        age: addAge
    }

    users.push(newUser)
    res.send(users)
})