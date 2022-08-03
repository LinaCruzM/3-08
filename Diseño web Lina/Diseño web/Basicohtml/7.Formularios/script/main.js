'use strict';
//Crear contenedores (Donde se guardan los datos)
/*
1. var = global : Se presta para errores
2. let = local : Variables
3. const = constantes
*/

const btnValidar= document.getElementById('validar'); //Traer elemento por Id
console.log(btnValidar); //Imprimir
//Al addEventListener debo pasarle dos parámetros
btnValidar.addEventListener('click', function(e) {
    e.preventDefault();
    let form= document.getElementById('dataForm');
    console.log(form[1].value);
    console.log(form[2].value);
    console.log(form[3].value);
    console.log(form[4].value);
    console.log(form[5].value);
    console.log(form[7].value);
    console.log(form[8].value);
    console.log(form[9].value);
    console.log(form[10].value);
    console.log(form[11].value);
    console.log(form[12].value);
    console.log(form[13].value);
    console.log(form[14].value);
    console.log(form[15].value);
    console.log(form[16].value);
    console.log(form[17].value);
    console.log(form[18].value);
}); //e de evento console.log(form[1].value para que solo se envíen los datos ingresados)