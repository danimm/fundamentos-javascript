class Toggable {
  constructor(element) {
    // inicializar el estado interno
    this.element = element
    this.element.innerHTML = 'Off'
    this.activated = false
    // Opcion 2
    this.onClick = this.onClick.bind(this)
    this.element.addEventListener('click', this.onClick)
    // this.element.addEventListener('click', this.onClick.bind(this)) Opcion 1
  }

  onClick(event){
    // cambiar estado interno ON-OFF
    // llamar a toggleText
    console.log('Esto es lo que tiene this', this);
    this.activated = !this.activated
    this.toggleText()
  }

  toggleText(){
    //Cambiar el texto
    this.element.innerHTML = this.activated ? 'On' : 'Off'
    // esto es un if en una linea, si esta activo ? que diga on ; sino OFF
  }
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)

// -----------
// -----------

function saludar (nombre, apellido) {
console.log(`Hola ${hombre} ${apellido}!`);
}

saludar("Danie", "Muñoz")
// Hola danie muñoz !
// haciendo bind de los parametros.
const saludarDanieles = saludar.bind(null, "Danie") // no seteamos un contexto(this) por eso se pone null
// pero el primer parametro siempre va a ser Danie y solo se le envia el segundo.
saludar("gomez")
// Hola Danie Gomez
