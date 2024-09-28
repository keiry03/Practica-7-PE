// Ejercicio 5: Recorrer un objeto y sus propiedades
const persona =  {
    nombre: "Isabel",
    edad: 24,
    ciudad: "Guatajiagua"
};

for (let propiedades in persona){
    console.log(`${propiedad}: ${persona[propiedad]}`);
}