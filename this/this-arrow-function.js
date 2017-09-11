class Persona {
  constructor(nombre, amigos = []) {
  this.nombre = nombre
  this.amigos = amigos // this.amigos = amigos || [] o si lo dejamos sin nada le asigna un array vacio
  }

  listarAmigos(){
    const _this = this  // para poder usarla en el scope del forEach
    this.amigos.forEach(function (amigo){
      console.log(`Hola mi nombre es ${_this.nombre} y soy amigo de ${amigo}.`);
    })
  }
  listarAmigos(){
    this.amigos.forEach(function (amigo){ // trae el this de fuera con bind
      console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}.`);
    }.bind(this))
  }
  listarAmigos(){
    this.amigos.forEach((amigo) => { // con la => el bind de this se hace auto.
      console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}.`);
    })
  }
}

new Danie = new Persona("Danie",["Pedro", "Juan", "Antonio"])
