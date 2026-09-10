const express = require('express')
const consultas = require('../dados.json')
const listarConsultas = (req, resp) => {

    consultas.forEach(consulta => {

        let imc = Number(consulta.peso) /
            (Number(consulta.altura) * Number(consulta.altura))

        consulta.imc = Number(imc.toFixed(2))
    })

    resp.send(consultas)
}
const novaConsulta = (req, resp) => {

    if (req.body) {

        let imc = Number(req.body.peso) /
            (Number(req.body.altura) * Number(req.body.altura))

        req.body.imc = Number(imc.toFixed(2))

        consultas.push(req.body)

        resp.send("Consulta recebida, em processamento")

    } else {

        resp.send("Erro ao receber consulta")
    }
}
const excluirConsulta = (req, resp) => {

    const id = req.params.id

    let status = 0

    consultas.forEach((consulta, indice) => {
        if (consulta.id == id) {
            status = 1
            consultas.splice(indice, 1)
        }
    })
    if (status == 1) {
        resp.send("Consulta excluída com sucesso")
    } else {
        resp.status(404).send("Consulta não encontrada")
    }
}
const atualizarConsulta = (req, resp) => {

    const id = req.query.id
    const dados = req.body
    let status = 0

    consultas.forEach(consulta => {
        if (consulta.id == id) {
            status = 1
            consulta.data = dados.data
            consulta.paciente = dados.paciente
            consulta.peso = dados.peso
            consulta.altura = dados.altura

            let imc = Number(dados.peso) /
                (Number(dados.altura) * Number(dados.altura))

            consulta.imc = Number(imc.toFixed(2))
        }
    })
    if (status == 1) {
        resp.send("Consulta atualizada com sucesso")
    } else {
        resp.status(404).send("Consulta não encontrada")
    }
}
const porta = 3000
const app = express()
app.use(express.urlencoded({ extended: true }))

app.post("/", novaConsulta)
app.get("/", listarConsultas)
app.patch("/", atualizarConsulta)
app.delete("/:id", excluirConsulta)

app.listen(porta, () => {
    console.log(`Servidor: http://127.0.0.1:${porta}`)
    console.log(`Cliente: http://127.0.0.1:5500/cliente/`)
})