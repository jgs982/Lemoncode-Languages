console.log("************** DELIVERABLE 03 *********************");

/*
    3. Clone Merge
    
    # Clone
    Implementa una función `clone` que, a partir de un objeto de entrada `source` devuelva un nuevo objeto con las propiedades de `source`
            
    # Merge    
    Implementa una función `merge` que, dados dos objetos de entrada `source` y `target`, devuelva un nuevo objeto con todas las propiedades de `target` y de `source`, y en caso de propiedades con el mismo nombre, `source` sobreescribe a `target`.    
*/

const datos = {
  nombre: 'Juan Pedro',
  email: 'uio765@gmail.com',
  telefono: '600512544',
  edad: 40
}

function clone(source) {
  return {...source};
}

const clonado = clone(datos);

console.log('Original: ' + JSON.stringify(datos, null, 4));
console.log('Clon: ' +  JSON.stringify(clonado, null, 4));

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  return {...target, ...source};
}

const mezclado = merge(a, b);

console.log('Source: ' + JSON.stringify(a, null, 4));
console.log('Target: ' + JSON.stringify(b, null, 4));
console.log('Mezclado: ' + JSON.stringify(mezclado, null, 4));