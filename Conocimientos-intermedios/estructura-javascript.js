// Variables
// En JS las variables no son fuertemente tipadas, se pueden asignar multiples valores

var Danie = "Daniel"
Danie = 28
Danie = new Date ()

// tambien se le pueden asignar funciones, y funciones con metodos

Danie = function saludar() {alert('Hola')}

// las variables tambien pueden tener objetos

Danie ={
  nombre: "Daniel", //nombre atributo, Daniel valor
  apellido: "Muñoz",
  edad: 28,
  saludar: function saludar() {
    alert(`Hola, me llamo ${this.nombre} ${this.apellido}.`)
  }
}

// Variables...no tan variables

const edad = 28 // no se pueden reasignar los CONST
edad++ // edad = edad + 1

// Variables...muy variables

function saludar(){
  var nombre = "Daniel"
  alert(`Hola ${nombre}.`);
}

nombre // undefined, solo va a existir nombre dentro de la funcion.
// si en la funcion arriba declararamos
nombre = "Daniel"
nombre // "Daniel"
window.nombre === nombre // true , esta MAL porque contaminamos el scope global.

var dias = [
  "lunes",
  "martes"
]

for(var i = 0; i< dias.length; i++){
  console.log(`${dias[i]} es el día #${i + 1} de la semana.`);
}
i // ? lo correcto es usar LET nunca USAR var

// Palabras reservadas, no se pueden llamar variables asi

break, case, catch, continue, debugger, default, delete, do, else, false, finally,
for, function, if, in, instanceof, new, null, return, switch, this, throw, true,
try, typeof, var, void, while, with.

// Palabra reservadas en ECMAScript 5

class const enum export extends import saludarPerez

// Palabras reservadas en el "strict mode"

implements, interface, let, package, private, protected, public, static, yield

// el ; sirve para decir a JS que termina la instruccion
// existen los IIFE inmedily invoked function que es para llamar
// directamente a la funcion entonces si deberiamos usar el ;

const nombre = "Danie"

;(function saludar(){
  console.log(`Hola ${nombre}`)
})()

const nombre = "Danie";
[
  "Lunes",
  "Martes",
  "Miércoles"
].forEach(function (dia){
  console.log(dia);
})
