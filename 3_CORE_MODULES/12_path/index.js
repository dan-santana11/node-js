const path = require('path')

const customPath = "/relatorios/matheus/relatorio1.pdf"

console.log(path.dirname(customPath)) // caminho do arquivo
console.log(path.basename(customPath)) // nome do arquivo
console.log(path.extname(customPath)) // extensão (ex:pdf)