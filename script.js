const fs = require("fs")
const crypto = require("crypto");
const express = require("express")
const app = express()


app.use(express.json())


const salvarLogs = (nome) => {
    
    let uuid = crypto.randomUUID() //id aleatorio

    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const year = data.getFullYear();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    const fswrite = (uuid + ' - ' + year + '-' + mes + '-' + dia + ' - ' + hora + ':' + minutos + ':' + segundos + ' - '+ nome + '\n')

    fs.writeFileSync("logs.txt", fswrite, {flag: 'a'})

    return uuid
}

app.post("/logs", (req, res) => {
    const {nome} = req.body
    if(!nome){
        return res.status(400).json({erro: "Nome é obrigatório"})
    }
    const id = salvarLogs(nome)

    res.status(200).json({
        id: id,
        msg: "Aluno registrado com sucesso"
    })
})

app.get("/logs", (req, res) => {
    try{
        const dados = fs.readFileSync("logs.txt", "utf-8")
        res.status(200).send(dados)
    }catch(erro){
        res.status(500).json({erro: "Erro ao ler os logs"})
    }
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})