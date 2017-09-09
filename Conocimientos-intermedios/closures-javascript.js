function saludarFamilia (apellido) {
  return function saludarMiembreDeFamilia(nombre) {
    console.log(`Hola ${nombre} ${apellido}.`);
  }
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")
const saludarRomero = saludarFamilia("Romero")

saludarGomez("Pedro")
saludarGomez("Laura")
saludarGomez("Juan")
saludarGomez("Mónica")
saludarGomez("Davida")

saludarPerez("Pedro")
saludarPerez("Laura")
saludarPerez("Juan")

saludarRomero("Jorge")

// function makePrefixer (prefijo){
//   return function palabraConPrefijo(numero){
//     console.log(`Para llamar a este País desde el extranjero: +${prefijo} ${numero}`);
//   }
// }

const makePrefixer = prefijo => numero => console.log(`Este pais en el extranjero es: +${prefijo}-${numero}`)
const creaPrefijo = prefijo => palabra => prefijo + palabra

const espana = makePrefixer(34)
const suiza = makePrefixer(41)
