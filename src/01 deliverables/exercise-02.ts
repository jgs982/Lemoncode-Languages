console.log("************** DELIVERABLE 02 *********************");

/*
    2. Concat
    
    Implementa una función `concat` (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
            
    Opcional:    
    Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
*/

const arrayA = ['a1', 'a2', 'a3', 'a4'];
const arrayB = ['b1', 'b2', 'b3'];
const arrayC = ['c1', 'c2', 'c3', 'c4', 'c5'];
const arrayD = ['d1'];

const concat = (a, b, ...resto) => {
    return [...a, ...b, ...resto];
};

const concatenado = concat(arrayA, arrayB, arrayC, arrayD);

console.log(`Array A: ${arrayA}`);
console.log(`Array B: ${arrayB}`);
console.log(`Array C: ${arrayC}`);
console.log(`Array D: ${arrayD}`);
console.log(`Concatenación: ${concatenado}`);