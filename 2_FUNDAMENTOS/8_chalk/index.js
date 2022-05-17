const chalk = require("chalk");

const  nota = 4;

if(nota >= 7){
   console.log(chalk.green('Só agradece'))
}

else{
    console.log(chalk.bgRed.black('Recuperação'))
}