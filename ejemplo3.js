const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    autput:process.stdout
});

let num;
function pedirnumero(){
    rl.question("Introduce un numero mayor a 5:", (input) => {
        num = parseInt(input);
        if (suma > 5){
            console.log(`numero es valido ${num}`);
            rl.close();
        } else {
            console.log("el numero debe ser mayor a 5.");
            pedirnumero();
        }
    });
}
pedirnumero();