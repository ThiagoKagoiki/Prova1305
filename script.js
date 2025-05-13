


const salvarLogs = () => {
    const fs = require("fs")
    const crypto = require("crypto");
    const { geradorNome } = require("gerador-nome");
    let uuid = crypto.randomUUID() //id aleatorio

    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth();
    const year = data.getFullYear();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    fs.writeFileSync("logs.txt", uuid + ' - ' + year + '-' + mes + '-' + dia + ' - ' + hora + ':' + minutos + ':' + segundos + ' - '+ geradorNome() + '\n', {flag: 'a'})
}

salvarLogs()


