const express = require('express')
const app = express()
const port = 5000

const project = require('./project')

app.use(express.static('public'))

app.use('/project', project)

app.listen(port, () => {
    console.log(`App rodando na porta:${port}`)
})