// Mais de um valor

const x = 10
const y = 'Daniel'
const z = [1,2]


console.log(x,y,z)

// Contagem de Impressões com template string
console.count(`O valor de x é ${x}`)
console.count(`O valor de x é ${x}`)
console.count(`O valor de x é ${x}!`)

// variavel entre string 
console.log('O nome dele %s, ele é programador',  y)

// limpar o console 
setTimeout(() => {
    console.clear()
}, 3000);