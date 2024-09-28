
// Ejercicio 4: recorer un array de nombres con diferentes operaciones
const nombres = ["Ana","Luis","Maria","Jan","Carlos","Elena","Sofia","Pedro"];

//1. Recorrer el array y mostrar cada nombre
console.log("Lista de Nombres:");
for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i]); //Imprime cada nombre en el array
}

//contar cantidad total de nombres
let cantidadNombres = nombres.length
console.log("\ncantidad total de nombres:"+ cantidadNombres);

//Buscar un nombre especifico dentro del array
let nombreBuscado = "Maria";
let encontrado = false;
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i]===nombreBuscado){
        encontrado = true;
        console.log("\nNombres'"+ nombreBuscado + "'encontrado en la pocision: " + i);
        break;
    }
}
if (!encontrado) {
    console.log("\nEl nombre '"+ nombreBuscado + "' no fue encontrado en el array.");
}

//4. encontrar el nombre mas largo en el array
let nombreMasLargo = nombres[0];
for (let i = 1; i < nombres.length; i++){
    if (nombres[i].length > nombreMasLargo.length){
        nombreMasLargo = nombres[i];
    }
}
console.log("\nEl nombre mas largo es:" + nombreMasLargo);

//5. convertir todos los nombres a mayusculas y mostrarlos
console.log("\nNombres en mayusculas:");
for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i].toUpperCase());
}

//6.Agregar un nuevo nombre al array y mostrar la lista actualizada
let nuevoNombres = "Gbriela";
nombres.push(nuevoNombres);
console.log("\nLista actualizada de nombres (despues de agregar '" + nuevoNombres +"'):");
for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

//7. Eliminar el ultimo nombre del array y mostrar la lista actualizada
nombres.pop();
console.log("\nLista de nombres despues de eliminar el ultimo:");
for (let i = nombres.length - 1; i < nombres.length; i++){
    console.log(nombres[i]);
}

//8. Invertir el orden de los nombres y mostrarlos
console.log("\nNombres en orden inverso:");
for (let i = nombres.length - 1; i >= 0; 1--) {
    console.log(nombres[i]);
}