import express from "express";
import cors from "cors";
import connection from "./database/connection";
import { v4 as passwordGenerator } from 'uuid';

const app = express();

app.use(express.json());
app.use(cors());

//=================================================== 01 INSERIR USUÁRIO
app.post("/users", async (req, res) => {
  const errorCode = 400
  try {

    const id = passwordGenerator()
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    if (!name) {
      throw new Error("Por favor, informe um nome.")
    } else if (!email) {
      throw new Error("Por favor, informe um email.")
    } else if (!password) {
      throw new Error("Por favor, informe uma senha.")
    }

    await connection.raw(`
    INSERT INTO labecommerce_users(id, name, email, password)
     VALUES (
      "${id}", "${name}", "${email}", "${password}"
     );
    `)
    res.status(200).send(`Usuário ${name} inserido com sucesso.`)

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//=================================================== 02 BUSCAR TODOS OS USUÁRIOS
app.get("/users", async (req, res) => {
  const errorCode = 400
  try {
    const users = await connection.raw(`
    SELECT * FROM labecommerce_users
    `)

    res.status(200).send(users[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//=================================================== 03 CADASTRAR PRODUTOS
app.post("/products", async (req, res) => {
  const errorCode = 400
  try {

    const id = passwordGenerator()
    const name = req.body.name
    const price = req.body.price
    const image = req.body.image

    if (!name) {
      throw new Error("Por favor, informe um nome.")
    } else if (!price) {
      throw new Error("Por favor, informe um preço.")
    } else if (!image) {
      throw new Error("Por favor, informe o link de uma imagem.")
    }

    await connection.raw(`
    INSERT INTO labecommerce_products(id, name, price, image_url)
    VALUES(
      "${id}", "${name}", "${price}", "${image}"
    )
    `)

    res.status(200).send(`Produto ${name} adicionado com sucesso.`)

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//=================================================== 04 BUSCAR TODOS PRODUTOS
app.get("/products", async (req, res) => {
  const errorCode = 400
  try {

    const product = await connection.raw(`
    SELECT * FROM labecommerce_products
    `)

    res.status(200).send(product[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//=================================================== 05 INSERIR COMPRAS
app.post("/purchases", async (req, res) => {
  const errorCode = 400
  try {

    const id = passwordGenerator()
    const user_id = req.body.user_id
    const product_id = req.body.product_id
    const quantity = Number(req.body.quantity)

    if (!user_id) {
      throw new Error("Por favor, informe o ID do usuàrio.")
    } else if (!product_id) {
      throw new Error("Por favor, informe o ID do produto.")
    } else if (!quantity) {
      throw new Error("Por favor, informe a quantidade.")
    }

    const price = await connection.raw(`
    SELECT price FROM labecommerce_products
    WHERE id = "${product_id}";
    `)

    const total_price = price[0][0].price * quantity

    await connection.raw(`
    INSERT INTO labecommerce_purchases(id, user_id, product_id, quantity, total_price)
    VALUES(
      "${id}", "${user_id}", "${product_id}", ${quantity}, ${total_price}
    )
    `)

    res.status(200).send(`Compra do produto efetuada.`)

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//=================================================== 06 BUSCAR COMPRAS DE UM USUÁRIO
app.get("/user/:user_id", async (req, res) => {
  const errorCode = 400
  try {

    const id = req.params.user_id

    const result = await connection.raw(`
    SELECT * FROM labecommerce_users 
    JOIN labecommerce_purchases ON labecommerce_purchases.user_id = labecommerce_users.id
    WHERE labecommerce_users.id = "${id}";
    `)

    if (result[0].length < 1)  {
      throw new Error ("Usuário não encontrado.")
    }

    res.status(200).send(result[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//=================================================== 07 BUSCAR TODOS PRODUTOS POR ORDEM
app.get("/productsByOrder", async (req, res) => {
  const errorCode = 400
  try {

    let product = req.query.product
    let sort = req.query.sort
    let order = req.query.order

    if (!product) {
      product = "%"
    }

    if (!sort) {
      sort = "name";
      order = "ASC"
    }

    const resultOrder = await connection.raw(`
    SELECT * FROM labecommerce_products
    WHERE name LIKE "%${product}%"
    ORDER BY ${sort} ${order}
    `)

    res.status(200).send(resultOrder[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//=================================================== 08 BUSCAR TODOS USUÁRIOS E SUAS COMPRAS
app.get("/getUsersPurchases", async (req, res) => {
  const errorCode = 400
  try {

    const usersPurchases = await connection.raw(`
    SELECT * FROM labecommerce_purchases
    JOIN labecommerce_users  ON labecommerce_users.id = labecommerce_purchases.user_id
    `)

    res.status(200).send(usersPurchases[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//=================================================== 00 REGISTRO DE COMPRAS (não foi pedido, mas achei útil fornecer esse endpoint)
app.get("/purchases", async (req, res) => {
  const errorCode = 400
  try {

    const purchases = await connection.raw(`
    SELECT * FROM labecommerce_purchases
    `)

    res.status(200).send(purchases[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
























































































app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});