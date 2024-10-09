const mysql = require("mysql2/promise");

const exec = async (sql) => {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "todolist",
        port: 3307,
    });

    let [results] = await connection.query(sql)

    return results
}

module.exports = { exec };
