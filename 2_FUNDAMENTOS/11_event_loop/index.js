function a() {
    console.log('Executando a()')
    b()
    c()
}

function b() {
    console.log('Executando b()')
}
function c() {
    console.log('Executando c()')
}

a()