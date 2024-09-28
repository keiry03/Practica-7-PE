function contarVocalesYDigitos(cadena) {
    let numVocales = 0;
    let numDigitos = 0;
    const vocales = 'aeiouAEIOU';

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            numVocales++;
        } else if (!isNaN(cadena[i]) && cadena[i] !== ' ') {
            numDigitos++;
        }
    }

    return { numVocales, numDigitos };
}

let cadena = '';
while (cadena.trim() === '') {
    cadena = prompt('Por favor, ingresa una cadena de texto:');
}

const resultado = contarVocalesYDigitos(cadena);
console.log(`Número de vocales: ${resultado.numVocales}`);
console.log(`Número de dígitos: ${resultado.numDigitos}`);
