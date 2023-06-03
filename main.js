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
      console.log(`Iteración ${i}: Número generado = ${numeroGenerado} <-- El número es par`); //<----- muestra por consola si el numero es par concatenamos la variable i dentro de nuestra cadena usando el signo de dolar $ y luego el nombre de la variable
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
  





 
    




