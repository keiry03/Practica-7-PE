let suma = 0;

let iteraciones = 0;
while (suma < 1000){
    let numeroAleatorio = Math.floor(Math.random()*100)+1;
    suma += numeroAleatorio;
    iteraciones++;
    console.log(`iteracion ${iteraciones}:se añidio ${numeroAleatorio},suma actual:${suma}`);
}

console.log(`proceso completado en ${iteraciones} iteraciones.suma total:${suma}`);