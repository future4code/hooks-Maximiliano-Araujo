import connection from "./connection";

const createUser = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS labecommerce_users (
            id VARCHAR (255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
            )
        `)

        console.log("Tabela de Usuários criado com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela de Usuários.")
        console.log(error.sqlMessage)
    }
}

async function createProduct() {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS labecommerce_products (
            id VARCHAR (255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL (8 , 2) NOT NULL,
            image_url VARCHAR (255) NOT NULL
            );
        `)
        
        console.log("Tabela Produtos criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela Produtos.")
        console.log(error.sqlMessage)
    }
}

async function labecommerce_purchases() {
    try {
        await connection.raw(`
        CREATE TABLE IF NOT EXISTS labecommerce_purchases (
            id VARCHAR (255) PRIMARY KEY NOT NULL,
            user_id VARCHAR (255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
            product_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (product_id) REFERENCES labecommerce_products(id),
            quantity INT NOT NULL,
            total_price DECIMAL (8 , 2) NOT NULL
        );
        `)
        console.log("Tabela Compras criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela Compras.")
        console.log(error.sqlMessage)
    }
}

labecommerce_purchases()
createUser()
.then(() => createProduct())
.finally(() => process.exit())