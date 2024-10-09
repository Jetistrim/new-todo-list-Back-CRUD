const express = require("express");
const cors = require("cors");
const port = 3000;
const tarefasRoute = require('./routes/tarefasRoute')

const app = express();
app.use(express.json());
app.use(cors());
app.use('/tarefas', tarefasRoute)


app.listen(port, () => {
    try {
        console.log(`Servidor rodando em http://localhost:${port}`);
    } catch {
        console.log("Deu ruim");
    }
});