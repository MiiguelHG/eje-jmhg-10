//Archivo JavaScript para la calculadora
//Hola mundo de JavaScript

function sumaNumeros(){
    //declaracion (let y const)
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');
    //proceso
    const suma = n1 +n2;
    //salida
    //alert('Resultado suma: ' +  suma);
    resultado.innerHTML='Resultado: ' + suma;
}

function restaNumeros(){
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');

    const resta = n1 - n2;

    resultado.innerHTML='Resultado: ' + resta;
}

function multiplicaNumeros(){
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');

    const multiplica = n1 * n2;

    resultado.innerHTML='Resultado: ' + multiplica;
}

function divideNumeros(){
    const n1 = parseInt(document.getElementById('ent1').value);
    const n2 = parseInt(document.getElementById('ent2').value);
    const resultado = document.getElementById('resultado');

    const divide = n1 / n2;

    resultado.innerHTML='Resultado: ' + divide;
}