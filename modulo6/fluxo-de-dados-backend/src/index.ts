import express from "express";
import { AddressInfo } from "net";
import { products } from "./data";
import { Products } from "./data";
import { v4 as generator } from 'uuid';

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
// 02 =========================================================
app.get("/test", (req, res) => {
  res.send("funcionou!")
})

// 03 =========================================================
app.post("/add", (req, res) => {
  const itemName: string = req.body.name
  const itemPrice: number = req.body.price
  const newItem: Products = {
    id: generator(),
    name: itemName,
    price: itemPrice
  }
  products.push(newItem)
  res.send(products)
})

// 04 =========================================================
app.get("/showProducts", (req, res) => {
  res.send(products)
})

// 05 =========================================================
app.put("/edit/:id", (req, res) => {
  const newPrice = req.body.price
  const id = req.params.id
  products.map((produto) => {
    if(id === produto.id) {
      produto.price = newPrice
      res.send(products)
    }
  })
})


