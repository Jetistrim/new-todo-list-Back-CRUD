const database = require('../config/conection');

const listarTarefas = async (req, res) => {
    let dados = await database.exec(`SELECT * FROM tarefas`);
    res.send(dados);
};
const listarTarefa = async (req, res) => {
    let dados = await database.exec(`SELECT * FROM tarefas WHERE id = ${req.params.id};`);
    res.send(dados);
};
const deletarTarefa = async (req, res) => {
    let dados = await database.exec(`DELETE FROM tarefas WHERE id = ${req.params.id};`);
    res.status(204).send("Tarefa deletada com sucesso!");
};
const criarTarefa = async (req, res) => {
    let {nomeDoResponsavel, descricao, statusTarefa} = req.body;

    let dados = await database.exec(`INSERT INTO tarefas (nomeDoResponsavel, descricao, statusTarefa) VALUES ('${nomeDoResponsavel}', '${descricao}', '${statusTarefa}');`);
    res.status(201).send(`Dados inseridos com sucesso!`);
};

module.exports = { listarTarefas, listarTarefa, deletarTarefa, criarTarefa };
