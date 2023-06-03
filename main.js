//---------------  Examen practico de javaScript de www.escueladeinternet.mx Resolved by : Kevin Andres Fontt lizama  ----------------

//---------- Ejercicio I Ramdom Par O Impar --------------------- 

// 1.- Random par o impar(10 ptos).
// Generar un código el cual genere 5 números aleatorios(Math.random()*100) enteros y
// devuelva si el número generado es par o impar.
// Ejemplo:
// Primera iteración: numeroGenerado = 5 // el número es impar
// Segunda iteración: numeroGenerado = 12 // el número es par

console.log("\n\n ############### Examen practico de javaScript de www.escueladeinternet.mx Resolved by: Kevin Andres Fontt lizama (arthas_dk) ############# \n\n")

console.log("..................... First exercise ...............................\n\n")

for (let i = 1; i <= 5; i++) { //bucle for que nos da un total de 5 iteraciones en total es decir 5 numeros 
    const numeroGenerado = Math.floor(Math.random() * 100); // <----- Generamos un número aleatorio entre 0 y 99
    const esPar = numeroGenerado % 2 === 0; //Comparamos si el numero generado es par usando el operador de resto 
  
    //condicionales if para mostrar por consola si el numero es par o impar 

    if (esPar) {
      console.log(`Iteración ${i}: Número generado = ${numeroGenerado} <-- El número es par`); //<----- muestra por consola si el numero es par concatenamos la variable --> i <-- dentro de nuestra cadena usando el signo de dolar $ y luego el nombre de la variable
    } else {
      console.log(`Iteración ${i}: Número generado = ${numeroGenerado} <-- El número es impar`); //aplicamos la misma logica solo que imprimimos por consola que el valor es impar concatenando el resultado del numero aleatorio 
    }
  }
  
    console.log("\n\n")


// ------------------------- Ejercicio II  ------------------------------------------------------------------------- 

//  2.- Múltiplos de un número dado (10 ptos).
// Escribir el código que muestre en consola los múltiplos de un número entero
// dado(definido en una variable para ser manipulado) en una secuencia del 1 al 100.
// Ejemplo si el número dado es 3 sus múltiplos serían 3,6,9,12,15…..21, etc.

 
console.log("..................... Second exercise ...............................\n\n")


const numero = 5; // se debe cambiar este valor para probar con diferentes números

  for (let i = 1; i <= 100; i++) {
    if (i % numero === 0) {
      process.stdout.write(`${i} `);
    }
  }
console.log("<---- finish \n\n")
// ------------------------- Ejercicio III  -------------------------------------------------------------------------

// 3.- Cuenta cuantas veces se repite un caracter en especifico (20 ptos).
// Diseña un código en el cual se pueda ingresar una cadena de texto y regrese cuantas
// veces se repite un carácter dado en dicha cadena de texto.
// Ejemplo la cadena dada es “hola como estas” y el carácter dado para saber cuantas veces
// se repite es “o” entonces la consola debería de mostrar: el carácter “o” se repite 3 veces en
// “hola como estas”

console.log("..................... Third exercise ................................\n\n")

const prompt = require('prompt-sync')(); //<---- Se que no lo han pedido pero usare esta biblioteca para hacer esta prueba en una solo archivo y asi se ve mas legible cuando se ejecuta en la consola, ya que requerimos ingresar parametros de funcion con inputs de entrada en el ejercicio 3, asi cuando se ejecute nuestro tercer ejercicio podremos seguir ejecutando de forma asyncrona el codigo de nuestro examen a resolver pregunta por pregunta ---> ejercicio 1, ejercicio 2, ejercicio 3, ejercicio 4  etc...

function ejecutarEjercicio3() {
  try {
    const string = prompt("Ingrese una cadena de texto: "); 
    const caracterDado = prompt("Ingrese un carácter a buscar: ");

    let contador = 0;
    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) === caracterDado) {
        contador++;
      }
    }

    console.log(`El carácter "${caracterDado}" se repite ${contador} veces en "${string}".`);
  } catch (error) {
    console.log("Operación inválida");
  }
}

ejecutarEjercicio3();

console.log("\n\n")

// ------------------------- Ejercicio IV  -------------------------------------------------------------------------

// 4.- Invertir un array (10 ptos).
// Escribe un código en el cual dado un arreglo , muestre en consola el arreglo original y el
// mismo pero invertido.
// Ejemplo arreglo original: [23,5,34,56,98,”cadena”,7] el arreglo invertido:
// [7,”cadena”,98,56,34,5,23].

console.log("..................... Fourth exercise ...............................\n\n");

function invertirArreglo(arr) {
    console.log("Arreglo original:", arr);
  
    let arrInvertido = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      arrInvertido.push(arr[i]);
    }
    console.log("Arreglo invertido:", arrInvertido);
  }
  
  let arreglo = [23, 5, 34, 56, 98, "cadena", 7];
  invertirArreglo(arreglo);

// --------------- metodo arr.reverse --------------------------------------

//tambien podemos usar el metodo especial .reverse para ahorrarnos unas lineas de codigo y evitar construir un bucle for
//descomenta la funcion y pruebalo si lo deseas, el resultado es el mismo


// function invertirArreglo(arr) {
//     console.log("Arreglo original:", arr);
  
//     var arrInvertido = arr.reverse();
//     console.log("Arreglo invertido:", arrInvertido);

//     arr.reverse();
//   }
  
//   var arreglo = [23, 5, 34, 56, 98, "cadena", 7];
//   invertirArreglo(arreglo);
  


  console.log("\n\n")

  console.log("..................... Fifth exercise .......................................................................\n\n");
  
//   5.- Nuevos jugadores (50 ptos).

//   1. Clase persona con propiedades nombre, apellido y edad
//   1.1. Crea el método getDetalles() el cual imprimirá en consola los atributos de la
//   persona.
//   1.2. El constructor recibe y asigna nombre, apellido y edad a los atributos internos.
//   2. La clase jugador hereda de persona e incluye la propiedad de posición
//   2.1. sobreescribir el método getDetalles() para que muestre en consola los detalles
//   de persona y los de jugador.
//   2.2. El constructor recibe y asigna posición a los atributos internos.
//   3. Clase entrenador hereda de persona y agrega años de experiencia y el id de
//   federación
//   3.1. Sobreescribir el método getDetalles() para que muestre en consola los detalles
//   de persona y entrenador.
//   _______________________________________________________________________________________________
//   _______________________________________________________________________________________________

//   3.2. El constructor recibe y asigna posición a los atributos internos.
//   3.3. En el constructor configurar para que si no se recibe un id de federación este
//   asigne un número aleatorio de 5 dígitos
//   4. Clase equipo tiene las propiedades de entrenador y jugadores
//   4.1. El constructor recibe el objeto de director y un arreglo con los jugadores que
//   pertenecen al equipo (con 3 o 4 jugadores como ejemplo está bien)
//   4.2. el método getDetalles() mostrar en consola los detalles del entrenador y de los
//   jugadores.
//   5. ¡Probemos!
//   5.1. crea un arreglo de 4 jugadores con diferentes nombres, edades y posición
//   (Portero, Defensa , Medio y Delantero).
//   5.2. crea un objeto de tipo entrenador con su nombre, edad y años de experiencia
//   5.3. crea un equipo con los objetos de entrenador y estudiantes demostrando el
//   funcionamiento de jerarquía.



// Programacion orientada a Objetos 
// Creacion de la Clase Padre ----> Clase Persona <--------- 

class Persona { 
    constructor(nombre, apellido, edad) {
      this.nombre = nombre;
      this.apellido = apellido; // <---------- declarando las variables del constructor de la clase Padre
      this.edad = edad;
    }
  
    getDetalles() { //creando el metodo getDetalles 
      return `Nombre: ${this.nombre}\napellido: ${this.apellido}\nEdad: ${this.edad}`; //retorna el valor de cada atributo creado en el constructor
    }
  }
  
  class Jugador extends Persona { // <--------  clase hija que hereda atributos de la clase padre Persona 
    constructor(nombre, apellido, edad, posicion) {
      super(nombre, apellido, edad);
      this.posicion = posicion; 
    }
  
    getDetalles() {
      return `${super.getDetalles()}\nPosicion de juego: ${this.posicion}`; //usamos la palabra reservada de javaScript llamada super para acceder a los atributos de la clase padre Persona, de esta manera ahorramos algunas lineas de codigo y no debemos crear nuevamente atributos que ya han sido creados con anterioridad esto funciona especialmente cuando las clases tienen funciones con atributos que son parecidos y no es necesario volver a crearlos nuevamente, por eso usamos el metodo super para acceder a estos valores y no crearlos denuevo ya que logicamente un jugador vendria siendo una -> Persona <- y tambien el entrenador seria una -> Persona <-
    }
  }
  
  class Entrenador extends Persona { //clase hija Entrenador que hereda atributos de la clase padre Persona
    constructor(nombre, apellido, edad, yearsOfExperience, idFederacion) {
      super(nombre, apellido, edad); //gracias a super no es necesario especificar nuevamente el this.edad = edad | this.apellido = apellido
      this.yearsOfExperience = yearsOfExperience;
      this.idFederacion = idFederacion || Math.floor(Math.random() * 90000) + 10000;
    }
    
    // como se puede notar solo debemos agregar los atributos o valores como se le quiera llamar que queremos agregar ya que el entrenador tambien tiene un nombre, apellido y una edad ya que es una -> Persona <-  PERO tiene informacion que debemos añadir nosotros 
  
    getDetalles() {
      return `${super.getDetalles()}\nAños de experiencia: ${this.yearsOfExperience}\nID de federación: ${this.idFederacion}`;
    }
  }
  
  class Equipo { // <--------------- creacion clase equipo
    constructor(entrenador, jugadores) {
      this.entrenador = entrenador;
      this.jugadores = jugadores;
    }
  
    getDetalles() { // metodo getDetalles que muestra los detalles por consola, el diseño lo hice asi solo para que en consola sea mejor visualmente

      let detallesEquipo = '';
        
      detallesEquipo += '------------------------------- Detalles del Equipo ---------------------------------------------\n';
      detallesEquipo += '\n------ Detalles del entrenador -----\n'; // el --> \n <---- es una expresion regular que añade un salto de linea
      detallesEquipo += this.entrenador.getDetalles() + '\n'; //esto es solo diseño que quise personalizar para que se vea mejor en consola
  
      this.jugadores.forEach((jugador, index) => { 
        detallesEquipo += `-------------------                                             jugador  ${index + 1}                                                    -------------------\n`;
        detallesEquipo += jugador.getDetalles() + '\n';
      });
  
      console.log(detallesEquipo); //imprimiendo por consola las instancias
    }
  } // aqui se cierra el metodo getDetalles
  
  let jugadores = [ //arreglo de jugadores de ejemplo 
    new Jugador("Fabian", "Muñoz", 20, "Portero"),
    new Jugador("Scarlett", "Fontt", 20, "Defensa"),
    new Jugador("Leticia", "Pailahueque", 23, "Medio"),
    new Jugador("Mailo", "Gato", 3, "Delantero"), // <---- mi otro gato (es blanco entero)
    new Jugador("Caos", "Gata", 3, "Delantera") // <---- mi gata (se porta mal)
  ];
  
  let entrenador = new Entrenador("Kevin", "Fontt", 40, 22); // <------------ yo 8)
  
  let equipo = new Equipo(entrenador, jugadores); //creacion de una nueva instancia de equipo con el entrenador (yo) y los jugadores.
  
  equipo.getDetalles(); //llamada de metodo 
  
  
  

  





 
    




