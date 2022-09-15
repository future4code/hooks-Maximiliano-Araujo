import connection from "./connection";

const createUser = async () => {
    try {
        await connection.raw(`
            CREATE TABLE todoList (
            id BIGINT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            nickname VARCHAR(255) NOT NULL,
            email VARCHAR(255)
            );
        `)

        console.log("Tabela todoList criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela todoList.")
        console.log(error.sqlMessage)
    }
}

async function createTask() {
    try {
        await connection.raw(
            `CREATE TABLE tasks (
                id BIGINT PRIMARY KEY,
                title VARCHAR (255) NOT NULL,
                description TEXT (255) NOT NULL,               
                status ENUM("To do", "Doing", "Done") NOT NULL,
                limit_date DATE NOT NULL,
                creator_user_id BIGINT NOT NULL,
                FOREIGN KEY (creator_user_id) REFERENCES todoList(id)
            )`
        )

        console.log("Tabela tasks criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela tasks.")
        console.log(error.sqlMessage)
    }
}

createUser()
.then(() => 
createTask())

.finally(() => process.exit())