import express from "express";
import { AddressInfo } from "net";
import { user } from "./data";
import { User } from "./data";

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

app.get("/users", (req, res) => {
    res.send(user)
})
// validação de cpf e idade ==============================
app.post("/createUser", (req, res) => {
    const name = req.body.name
    const cpf = req.body.cpf
    const birthday = req.body.birthday
    const currentYear = new Date().getFullYear()
    const customerYear = birthday.split("/")[2]
    const customerAge = currentYear - customerYear

    let validation = false
    user.map((customer) => {
        if (customer.cpf === cpf) {
            validation = true
        }
    })
    if (!validation && customerAge >= 18) {
        const newUser: User = {
            name: name,
            cpf: cpf,
            birthday: birthday,
            balance: 0,
            extract: []
        }
        user.push(newUser)
        res.send(user)
    } else {
        res.send("CPF já cadastrado ou idade menor que 18 anos.")
    }
})

// mostrar saldo ==============================================
app.get("/showBalance", (req, res) => {
    const name = req.headers.name
    const cpf = req.headers.cpf

    const userResponse: User[] = []

    user.map((customer) => {
        if (name === customer.name && cpf === customer.cpf) {
            userResponse.push(customer)
        }
    })
    userResponse.length !== 0 ? res.send(userResponse) : res.send("Não conseguimos encontrar o usuário, verifique se o nome está correto.")
})

// alterar saldo ==============================================
app.put("/changeBalance", (req, res) => {
    const name = req.headers.name
    const cpf = req.headers.cpf
    const changeBalance = req.body.balance

    const newBalance: any[] = []
    user.map((customer) => {
        if (name === customer.name && cpf === customer.cpf) {
            customer.balance = changeBalance + customer.balance 
            newBalance.push(customer)
        }
    })
    res.send(newBalance)
})

































