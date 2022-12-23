//Toma los elementos HTML en funcion de su id(#) o literal como se llama la etiqueta('h1') 
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#formulario');

//Metodo para llamar a funciones segun el evento que se defina
form.addEventListener('submit',sumarInputValue);

//Funcion que se ejecuta al presionar el boton de HTML 
function sumarInputValue(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    //innerText modifica el contenido HTML desde JS
    pResult.innerText = "Resultado: " + sumaInputs;
}
















//Selecciona el elemento que no tiene class ni id
//const h1 = document.querySelector('h1')
//const val = document.querySelector('input')

/*console.log(h1);
console.log({h1, val});

h1.getAttribute('pantalla');
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class','rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
*/
//input.value = '456';

/*const img = document.createElement('img');
img.setAttribute('src', 'https://logodownload.org/wp-content/uploads/2017/02/colo-colo-logo-escudo-shield.png');
console.log(img);

pid.append(img);*/

