//
// Práctica 10 - Cronómetro
//

console.log('Esto es un cronómetro!');

//let cronometro = getElementById('cronometro');
//let iniciar = document.getElementById('iniciar');
//let detener = document.getElementById('detener');
//let limpiar = document.getElementById('limpiar');

let cronometro = 0; conteo = 0;

//Comportamiento del botón 'iniciar'
function iniciar(){
    const iniciar = document.getElementById('cronometro');
    cronometro++;
    iniciar.innerHTML = cronometro;
}
//set interval para decirle al la funcion de iniciar que va aumentando cada segundo
function init (){
    //se usa la variable de conteo para que el set interval se guarde allí
    conteo = window.setInterval(iniciar,1000);
}

//comportamiento del botón con un evento para dar click
const botonIniciar = document.getElementById('iniciar');
botonIniciar.addEventListener('click',init);

//Comportamiento del botón 'detener'
function detener(){
    const detener = document.getElementById('cronometro');
    //al tener la variable conteo con el set interval guardado el
    //clear interval se podrá usar para detener el set interval directamente
    window.clearInterval(conteo);
}
//comportamiento del botón con un evento para dar click
const botonDetener = document.getElementById('detener');
botonDetener.addEventListener('click',detener);


//comportamiento del botón de 'limpiar'
function limpiar(){
    const clean = document.getElementById('cronometro');
    cronometro = 0;
    clean.innerHTML = cronometro;
}

//comportamiento del botón con un evento para dar click
const botonLimpiar = document.getElementById('limpiar');
botonLimpiar.addEventListener('click',limpiar);