console.log("************** PRACTICE *********************");


/*
    Biggest Word
    
    Crea una función que reciba una frase en formato string y devuelva la palabra más larga. En caso de haber varias con longitud máxima que devuelva siempre la primera. Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.
    
    **TIP**: Consulta la documentación en MDN sobre los strings, verás que incorporan muchas funciones de utilidad para el manejo y manipulación de strings.
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
    
    function biggestWord(phrase) {
      // Implementation here
    }
    
    // Ejemplo
    console.log(biggestWord("Esta frase puede contener muchas palabras"));  // "contener"
    console.log(biggestWord("Ejercicios básicos de JavaScript"));           // "Ejercicios"
*/

/*
    Califications
    
    > **NOTA IMPORTANTE**: Realiza primero el ejercicio "Values".
    
    Dada la calificación de alumnos de una clase en forma de objeto como el siguiente:
    
    const eso2o = {
      David: 8.25,
      Maria: 9.5,
      Jose: 6.75,
      Juan: 5.5,
      Blanca: 7.75,
      Carmen: 8,
    };    
    
    Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo el sistema de calificación español:
    
    - Matrícula de Honor = 10
    - Sobresaliente = entre 9 y 10
    - Notable = entre 7 y 9
    - Bien = entre 6 y 7
    - Suficiente = entre 5 y 6
    - Insuficiente = entre 4 y 5
    - Muy deficiente = por debajo de 4
    
    function printAverage(classResults) {
      // Implementation here.
    }
        
    **TIP**: Rompe en tantas funciones auxiliares como necesites.
    
    **TIP**: Utiliza el ejercicio "values" para extraer los valores de un objeto. En `Array.prototype` también cuentas con otro método que podría resultarte útil para transformar un array a un único valor.
*/

/* 
    Check Arguments

    Es muy habitual en javascript, al recibir argumentos de una función, querer asegurarnos de que no sean `undefined` o `null`. En este ejercicio debes convertir el código de abajo en algo equivalente pero más compacto y expresivo.
    
    **TIP**: Piensa en el operador ternario y también en el operador OR.
    
    **TIP**: Puedes suponer que input es siempre de tipo string, incluyendo `null` o `undefined`. Es decir, no vas a recibir números, objetos, etc.
    
    function f(input) {
      var result;
      if (input === undefined) {
        result = "Unknown";
      } else if (input === null) {
        result = "";
      } else {
        result = input;
      }
      return result;
    }    
*/

/* 
    Clone Merge
    
    Apartado A
    
    Implementa una función `clone` que devuelva un objeto clonado a partir de otro:
        
    function clone(source) {
      // Implementation here.
    }
        
    Apartado B
    
    Dados dos objetos cualesquiera, implementa una función `merge` que mezcle uno sobre otro. El objeto resultante debe ser la mezcla de las propiedades del objeto `source` sobre las del objeto `target`.
    
    **TIP**: Usa la función `clone` del apartado A.
        
    function merge(source, target) {
      // Implementation here.
    }
    
    // Por ejemplo, dados estos 2 objetos:
    var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
    var b = { name: "Luisa", age: 31, married: true };
    
    // El resultado de mezclar a sobre b sería:
    merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}    
*/

/*
    Deep Equal
    
    Apartado A
    
    Suponiendo objetos sin anidamiento y con propiedades primitivas, construye una función que compare el contenido de 2 objetos.
    
    **TIP**: Recuerda, los objetos tienen un método `hasOwnProperty` que nos indica si dicho objeto tiene o no una propiedad concreta. Ejemplo `a.hasOwnProperty("name")`, si `a` tiene una propiedad `name` nos devolverá `true`, en caso contrario `false`.
        
    var user = { name: "María", age: 30 };
    var clonedUser = { name: "María", age: 30 };
    
    console.log(user === clonedUser); // false
    
    function isEqual(a, b) {
     ... // Implementation here
    }
    
    console.log(isEqual(user, clonedUser)); // true
        
    Apartado B
    
    Vamos a mejorar la solución del apartado A suponiendo ahora que si puede existir anidamiento de objetos.
    
    **TIP**: Recuerda que el operador `typeof` en Javascript nos devuelve un string indicando el tipo de una variable de entre tipos primitivos, objetos o funciones. Ejemplo, `typeof 12 // "number"` o `typeof {} // "object"`.
        
    var user = {
      name: "María",
      age: 30,
      address: { city: "Málaga", code: 29620 },
      friends: ["Juan"],
    };
    var clonedUser = {
      name: "María",
      age: 30,
      address: { city: "Málaga", code: 29620 },
      friends: ["Juan"],
    };
    
    function isDeepEqual(a, b) {
      ... // Implementation here
    }
    
    console.log(isDeepEqual(user, clonedUser)); // true    
*/

/*
    Dices
    
    Empleando el concepto de _closure_, emula el comportamiento de 2 dados.
    
    Utiliza un _closure_ para almacenar el resultado de tirar 2 dados, y encapsula junto a estos datos, métodos que implementen la siguiente funcionalidad:
    
    - Hacer reset, poner a `undefined` o `null` ambos resultados.
    - Tirar los dados. **TIP**: Usa `Math.random()` para tiradas aleatorias.
    - Imprimir el resultado por consola. Ten en cuenta lo siguiente:
      - Informa al usuario que debe tirar primero cuando corresponda.
      - Si saca doble 6, ¡dale un premio!
*/

/*
    Hoisting
    
    **NOTA**: Realiza estos ejercicios en vanilla JS. Si estás utilizando un playground de TypeScript obtendrás errores.
    
    Apartado A
    
    ¿Cual crees que será el resultado de la consola y porqué?
    
    **TIP**: escribe el código equivalente.
        
    function f() {
      console.log(a);
      console.log(g());
    
      var a = "good job!";
      function g() {
        return a;
      }
      console.log(a);
    }
    
    f();
        
    Apartado B
    
    ¿Y ahora?
        
    var a = 1;
    
    (function() {
      console.log(a);
      var a = 2;
      b = 4;
      var c = 3;
    })();
    
    console.log(a);
    console.log(b);
    console.log(c);
        
    ## Apartado C
    
    ¿Y con esta ligera variación?
    
    f();
    var a = 1;
    
    function f() {
      console.log(a);
      b = 4;
      var c = 3;
    }
    
    console.log(a);
    console.log(b);
    console.log(c);    
*/

/*
    Includes

    En ES7 ya existe una función de manejo de arrays llamada `Array.includes()` que indica si un determinado valor figura entre los items de un array dado.
    Crea una función en ES5 con el mismo comportamiento, es decir, una función que reciba un array y un valor y devuelva un `boolean` indicando si el valor está dentro del array.
        
    function includes(array, value) {
      // Implementation here
    }
    
    // Ejemplo:
    console.log(includes([1, 2, 3], 3)); // true
    console.log(includes([1, 2, 3], 0)); // false
        
    Challenge
    
    El ejercicio anterior puede quedar simplificado si utilizas una función de los arrays
    que devuelve el índice de un elemento dado.
    
    **TIP**: Consulta la documentación en MDN sobre los arrays:
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
*/

/*
    Primes
    
    Crea una función tal que, dado un número entero de inicio `from` y otro de fin `to`, encuentre los números primos entre ellos y los muestre por pantalla.
        
    function showPrimes(from, to) {
      // Implementation here.
    }
        
    Asi pues, la salida desde el 1 al 10 sería:
        
    1 is not a prime
    2 is PRIME!
    3 is PRIME!
    4 is not a prime
    5 is PRIME!
    8 is not a prime
    9 is not a prime
    10 is not a prime
        
    Utiliza la función para explorar todos los primos hasta el 100.
    
    TIP: Puedes crearte una función auxiliar para saber si un número es primo o no, y utilizarla en tu función principal. Es buena práctica crear funciones auxiliares que hagan una sola cosa (principio de única responsabilidad).
    
    Challenge
    
    Se puede mejorar mucho el rendimiento del ejercicio anterior.
    Al buscar si un numero es primo, podemos dejar de comprobar si es divisible por cada entero mayor que 1 una vez alcancemos la raiz cuadrada de dicho número.
    
    **TIP**: Explora en la documentación todas las funciones matemáticas que nos
    ofrece JavaScript mediante el interfaz `Math`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/*
    Read Book
    
    Crea una función `isBookRead` que reciba una lista de libros y un título y devuelva si se ha leído o no el libro.
    Un libro es un objeto con `title` como string y `isRead` como booleano. En caso de no existir el libro devolver false
    
    **TIP**: Existe un método de los Arrays que te ayudará a buscar según un patrón:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
        
    function isBookRead(books, titleToSearch) {
      // Implementation here
    }
    
    // Ejemplo:
    var books = [
      { title: "Harry Potter y la piedra filosofal", isRead: true },
      { title: "Canción de hielo y fuego", isRead: false },
      { title: "Devastación", isRead: true },
    ];
    
    console.log(isBookRead(books, "Devastación")); // true
    console.log(isBookRead(books, "Canción de hielo y fuego")); // false
    console.log(isBookRead(books, "Los Pilares de la Tierra")); // false    
*/

/*
    Reverse Text
    
    Dado un texto cualquiera, invierte el orden de las palabras.
    
    **TIP**: Se hace en 1 sola línea.
        
    Ejemplo: "Uno dos tres" --> "tres dos Uno"
        
    **TIP**: Consulta la documentación en MDN sobre los strings, verás que incorporan muchas funciones de utilidad para el manejo y manipulación de strings.
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
        
    function reverseText(text) {
      // Implementation here.
    }    
*/

/*
    Subsets
    
    Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra:
        
    function subsets(word) {
      // Implementation here
    }
    
    // Ejemplo
    console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
        
    Challenge
    
    Repite el ejercicio anterior sin utilizar arrays auxiliares ni bucles for/do/while.
    
    TIP: Una forma válida de "iterar" es utilizando algún método de los Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
*/

/*
    This
    
    ¿Cual es la salida de los logs en el siguiente código? Intenta razonar, no te limites a ejecutar la solución.
        
    var surname = "Pérez";
    var person = {
      name: "Juan",
      surname: "González",
      wife: {
        name: "Ana",
        surname: "Jiménez",
        getSurname: function() {
          return this.surname;
        },
      },
    };
    
    console.log(person.wife.getSurname());
    var surnameFunction = person.wife.getSurname;
    console.log(surnameFunction());
    console.log(surnameFunction.call(person));    
*/

/*
    Values
    
    Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:
        
    function values(obj) {
      // Implementation here
    }
    
    // Ejemplo:
    console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]
        
    Challenge
    
    Evita añadir las propiedades heredadas en caso de ser instancia de una clase:
        
    // Ejemplo:
    function Person(name) {
      this.name = name;
    }
    
    Person.prototype.walk = function() {
      console.log("I'm walking");
    };
    
    var john = new Person("John");
    console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]    
*/

/*
    Zip
    
    Crea una función `zipObject` tal que acepte un array de claves como primer argumento y un array de valores como segundo argumento y cuyo objetivo sea crear un objeto uniendo las claves con sus valores.
    Asumir que el array de claves tiene como mínimo la misma longitud que el de valores:
        
    function zipObject(keys, values) {
      // Implementation here
    }
    
    // Ejemplo
    console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}
        
    ## Challenge
    
    Si no hay valores suficientes para todas las claves evita que aparezcan como `undefined`.
        
    // Ejemplo:
    console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}
*/

/*
    ZZCrypt
        
    // Descifra el siguiente secreto:
    var secret =
      "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";
    
    // Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
    var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
    var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
    
    function decrypt(secret) {
      // Implementation here.
    }    
*/

/*
    Args
    
    Dada la siguiente función:
        
    function f(a, { b } = {}, c = 100) {
      console.log(arguments.length);
      console.log(a, a === arguments[0]);
      console.log(b, b === arguments[1]);
      console.log(c, c === arguments[2]);
    }
        
    ## Apartado A
    
    ¿Qué muestra por consola esta llamada?
        
    f("JS rocks!", { b: "b" });
        
    ## Apartado B
    
    ¿Y con estos argumentos?
    
    f({ b: "b" });
        
    Apartado C
    
    ¿Y ahora?
    
    f("JS sucks!", null, 13);    
*/

/*
    Array Operations
    
    Apartado A
    
    Implementa una función `head` (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
    
    const head = (// array //) => {}; // Implementation here.
        
    Apartado B
    
    Implementa una función `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
    
    const tail = (// array //) => {}; // Implementation here.
        
    Apartado C
    
    Implementa una función `init` (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece `Array.prototype`.
    
    const init = (// array //) => {}; // Implementation here.
        
    Apartado D
    
    Implementa una función `last` (inmutable), tal que, dado un array como entrada devuelva el último elemento.
    
    const last = (// array //) => {}; // Implementation here.    
*/

/*
    Concat

    Apartado A
    
    Implementa una función `concat`, tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread.
    
    **TIP**: Se hace en 1 línea. No utilices el método `Array.prototype.concat()`.
        
    const concat = (a, b) => {}; // Implementation here.
        
    Apartado B
    
    Repite el ejercicio anterior suponiendo cualesquiera arrays de entrada (no te limites solamente a 2).
        
    const concatMulti = (// multiples arrays //) => {}; // Implementation here.    
*/

/*
    Console
    
    Apartado A
    
    Intenta razonar cual será el resultado de la consola al ejecutar este código:
    
    var a = 1;
    let b = 2;
    
    {
      try {
        console.log(a, b);
      } catch (error) {}
      let b = 3;
      console.log(a, b);
    }
    
    console.log(a, b);
    
    () => {
      console.log(a);
      var a = 5;
      let b = 6;
      console.log(a, b);
    };
    
    console.log(a, b);
        
    Apartado B
    
    Sin tocar ninguno de los `console.log` anteriores, modifica ligeramente el código para que muestre la siguiente secuencia:
    
    1 3
    1 3
    1 2
    5
    5 6
    1 2    
*/

/*
    Fibonacci

    Implementa una función para calcular el n-enésimo termino de la sucesión de Fibonacci. Esta sucesión tiene sus dos primeros términos prefijados:
    
    fib(0) = 0
    fib(1) = 1
        
    Y a partir de aqui, el siguiente término se calcula a partir de los dos anteriores:
    
    fib(2) = fib(1) + fib(0)
    ...
    fib(n + 1) = fib(n) + fib(n - 1)
        
    **TIP**: Es el clásico problema donde el término siguiente depende del actual y el anterior.
    
    **TIP**: También se puede abordar con recursividad, pero buscamos una solución iterativa para hacer uso de destructuring con múltiples asignaciones.
    
    const fib = n => {
      // Implementation here //
    };    
*/

/*
    Players Order
    
    En una gran cantidad de juegos el sistema de turnos es sencillo, una vez el jugador actual ha consumido su turno, pasa al final de la cola y le toca al siguiente. Dada una lista inicial de jugadores, implementa una función que devuelva la nueva lista de jugadores, en el orden correcto, después de X turnos.
    
    **TIP**: Aunque se puede resolver con el operador `%`, intenta idear una solución usando spread/rest y destructuring.
        
    const getPlayersOrder = (players, turns) => {
      // Implementation here //
    };
    
    // Un ejemplo:
    const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
    console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]    
*/

/*
    Reminder

    El siguiente código implementa una sencilla clase que actúa como reminder, es decir, dado un mensaje, lo muestra por consola transcurrido (al menos) el tiempo indicado por el usuario:
        
    class Reminder {
      constructor(text) {
        this.text = text;
      }
    
      remindMe(delay) {
        setTimeout(function() {
          console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
        }, delay * 1000);
      }
    }
        
    Te animamos a que crees una nueva instancia de reminder y la utilices. Escribe el mensaje que tu quieras y añade unos pocos segundos de retardo.
    Comprueba la salida por consola ... algo no funciona como esperábamos ¿verdad? ¿Sabrías decirnos que está pasando aquí? ¿Cómo lo arreglarías?
*/

/*
    Slot Machine

    El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda.
    
    Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando. Cuando se llame al método play el número de monedas debe incrementar de forma automática y debe generar tres booleanos aleatorios. En caso de que los tres booleanos sean true debe un mensaje por consola:
    
    Congratulations!!!. You won <número de monedas> coins!!
        
    y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:
    
    Good luck next time!!    
    
    // Ejemplo de uso:
    class SlothMachine {
      
    }
    
    const machine1 = new SlothMachine();
    machine1.play(); // "Good luck next time!!"
    machine1.play(); // "Good luck next time!!"
    machine1.play(); // "Congratulations!!!. You won 3 coins!!"
    machine1.play(); // "Good luck next time!!"
    machine1.play(); // "Congratulations!!!. You won 2 coins!!"    
*/

/*
    Swap
    
    ¿Sabrías intercambiar el valor de estas 2 variables en una sola línea?
        
    let a = "A";
    let b = "B";
    
    // Implementation here, one line, one shot!    
    console.log(a === "B" && b === "A" ? "You did it!" : "Keep trying!");    
*/

/*
    Califications Summary

    Utilizando TypeScript escribe una función que reciba una lista de estudiantes (que tienen nombre y una lista de notas) y devuelva otra lista donde por cada estudiante devuelva su nombre, su nota más alta y la media de sus notas.
    
    Crea para ello dos entidades, una para representar al estudiante (`Student`) y otra para representar su nombre, nota más alta y media de notas (`StudentSummary`).
    
    No se permite el uso de clases. En caso de usar funciones auxiliares típalas. Puedes usar la función `Number.prototype.toPrecision(3)` para reducir el número de decimales de la media de calificaciones a tres números.
        
    const students = [
      { name: "Juan", califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34] },
      { name: "Álvaro", califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01] },
      { name: "María", califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3] },
      { name: "Jorge", califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69] },
      { name: "Mónica", califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48] },
    ];
    
    const summarizeClassRoom = studentList => {
      // Implementation here
    };
    
    console.log(summarizeClassRoom(students));
    // [
    //   { name: 'Juan', highestCalification: 9.71, averageCalifications: '5.37' },
    //   { name: 'Álvaro', highestCalification: 8.3, averageCalifications: '5.58' },
    //   { name: 'María', highestCalification: 9.3, averageCalifications: '3.92' },
    //   { name: 'Jorge', highestCalification: 9.07, averageCalifications: '5.38' },
    //   { name: 'Mónica', highestCalification: 9.72, averageCalifications: '4.42' }
    // ]    
*/

/*
    Curry Setter

    En un formulario tenemos un objeto con los campos `name`, `surname` y `age` que representan un usuario. Crea una función `set` que reciba un objeto con los campos de usuario, el nombre de una propiedad y su valor y actualice la propiedad del objeto con el valor pasado como argumento.
    
    El ejercicio debe cumplir la siguiente norma: la función debe ser pura, es decir, debe crear un nuevo objeto sin modificar el existente.
    
    const julia = { name: "Julia", surname: "Álvarez", age: 19 };
    const updatedJulia = set(julia, "age", 25);
    
    console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
    console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
    console.log(julia === updatedJulia); // false
        
    Opcional
    
    Currifica dicha función para que permita crear funciones donde el argumento del nombre de la propiedad esté configurado previamente.
    Es decir, modifica la función `set` para poder crear `setName`, `setSurname` y `setAge` que reciban sólo el objeto y el valor y sepan qué propiedad actualizar.
    
    **TypeScript**: Además, si quieres, puedes extraer la firma de la interfaz sin ponerla en línea con la implementación.
        
    const setName = set(// ... //);
    const setSurName = set(// ... //);
    const setAge = set(// ... //);
    
    const julia = { name: "Julia", surname: "Álvarez", age: 19 };
    
    console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
    console.log(setSurname(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
    console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }    
*/

/*
    Morse

    Vamos a crear... ¡un transmisor Morse!
    
    Descripción
    
    El ejercicio consiste en, dado cualquier mensaje de entrada, representar por consola el estado de las señales morse que resultan de transmitir dicho mensaje. Para facilitarte la tarea piensa en la típica bombilla de un transmisor morse:
    
    - Cuando recibe un punto, se enciende brevemente.
    - Cuando recibe una raya, se enciende más prolongadamente.
    - El tiempo que la bombilla permance apagada ayuda a discernir la separación entre letras y también entre palabras.
    
    Por tanto, la salida por consola será una sucesión de estados: `ON`/`OFF`, `Encendido`/`Apagado`, `1`/`0`, como prefieras.
    
    Implementación
    
    Para ello tendremos que implementar una factoría de transmisores. Recuerda que una factoría es una función que devuelve un objeto o clase. Esa decisión es a tu,
    la entidad transmisor podrá ser objeto o clase, como prefieras. Esta factoría necesita una serie de "ingredientes" para configurar el transmisor:
    
    - Un mapa que traduzca de carácter a su representación morse. Sírvete del objeto auxiliar `morseAlphabet` que se adjunta más abajo.
    - Una función que implemente un mecanismo de timeout para espaciar los símbolos a transmitir. Este mecanismo será como un setTimeout con la diferencia de que en lugar de tomar milisegundos como entrada, será el número de puntos a esperar. Un punto, como explicaremos más abajo, es la unidad temporal básica de referencia.
    - Un función `writer` que será la encargada de escribir por consola el estado de nuestra bombilla. Usa `ON`/`OFF`, `1`/`0` o lo que prefieras.
    - Un callback para cuando el mensaje se haya terminado de transmitir completamente. La entidad transmisor deberá tener una función para transmitir el mensaje deseado, que admita dicho mensaje como parámetro.
    
    NOTA
    
    Utiliza Typescript y proporciona un tipado lo más completo posible.
    
    Timing
    
    La unidad temporal de referencia será la duración de 1 punto en lugar de trabajar en milisegundos. La duración real en ms. de dicho punto es a tu elección, puede ser de 50ms o de 1seg. si estás haciendo pruebas y quieres ir despacio. Dicho esto deberás saber que, en morse:
    
    - La duración de 1 punto es la referencia temporal.
    - Las rayas duran 3 puntos.
    - La separación entre cada punto o cada raya es también de 1 punto.
    - La separación entre letras es de 3 puntos.
    - La separación entre palabras es de 7 puntos.
    
    Más info sobre el código Morse:
    https://en.wikipedia.org/wiki/Morse_code
    
    Objeto auxiliar
        
    const morseAlphabet = {
      "0": "-----",
      "1": ".----",
      "2": "..---",
      "3": "...--",
      "4": "....-",
      "5": ".....",
      "6": "-....",
      "7": "--...",
      "8": "---..",
      "9": "----.",
      a: ".-",
      b: "-...",
      c: "-.-.",
      d: "-..",
      e: ".",
      f: "..-.",
      g: "--.",
      h: "....",
      i: "..",
      j: ".---",
      k: "-.-",
      l: ".-..",
      m: "--",
      n: "-.",
      o: "---",
      p: ".--.",
      q: "--.-",
      r: ".-.",
      s: "...",
      t: "-",
      u: "..-",
      v: "...-",
      w: ".--",
      x: "-..-",
      y: "-.--",
      z: "--..",
      ".": ".-.-.-",
      ",": "--..--",
      "?": "..--..",
      "!": "-.-.--",
      "-": "-....-",
      "/": "-..-.",
      "@": ".--.-.",
      "(": "-.--.",
      ")": "-.--.-",
  };    
*/
