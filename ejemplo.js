//selecionar todos lo encabezados desde h1-h6
const headers = document.querySelectorAll('h1,h2,h3,h4,h5,h6');

//usuario el bucle for para tirar los encabezados
for (let i = 0; i < headers.length; i++){
    //cambiar el texto de cada encabezado
    headers[i].innerText = `nuevo encabezado denivel ${i + 1}`;
}