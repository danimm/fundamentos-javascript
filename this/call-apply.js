
const Danie = {
  nombre: 'Danie',
  apellido: 'Muñoz'
}

function saludar (veces) {
  for (let i = 0; i < veces; i++) {
    console.log(`Hola ${this.nombre} ${this.apellido}.`);
    // si no especificamos el this, lo buscara en el objeto global (windows.nombre)
  }
}
saludar.call(Danie, 3) // el primer parametro del call es quien va a ser this (entorno)
// en este caso es el objeto Danie por eso toma sus parametros de nombre y apellido



const Danie = {
  nombre: 'Danie',
  apellido: 'Muñoz'
}

function saludar (veces, uppercase) {
  let str = `Hola ${this.nombre} ${this.apellido}.`
  str = uppercase ? str.toUpperCase() : str
  for (let i = 0; i < veces; i++) {
    console.log(str);
  }
}
// si ya tenemos el array tambien podriamos usar una variable
// y los parametros se enviarian separados por comas PERO CON CALL
const parametros = [3, true]
saludar.apply(Danie, ...parametros) // el apply se pasan los parametros por [] como si fuese un array
