console.log("************** DELIVERABLE 01 *********************");

/*
    1. Array operations

    # Head    
    Implementa una función `head` (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
           
    # Tail    
    Implementa una función `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
        
    # Init    
    Implementa una función `init` (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
           
    # Last    
    Implementa una función `last` (inmutable), tal que, dado un array como entrada devuelva el último elemento.    
*/

const array = [1, 2, 3, 4, 5];
console.log(`Array: ${array}`);

const head = (array) => {    
    let [primero, _] = array;
    return primero;
};

const first = head(array);
console.log(`El primer elemento del array dado es: ${first}`);

const tail = (array) => {
    let [head, ...tail] = array;
    return tail;
};

const cola = tail(array);
console.log(`La cola del array dado es: ${cola}`);

const init = (array) => {
    return array.slice(0, array.length - 1);
};

const cabeza = init(array);
console.log(`Elementos del array menos el último: ${cabeza}`);

const last = (array) => {
   return array.slice(-1);
};

const ultimo = last(array);
console.log(`El último elemento del array es: ${ultimo}`);