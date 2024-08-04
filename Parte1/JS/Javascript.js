// variables 
const x = 1
let y = 5

console.log(x, y)   // se imprime 1, 5
y += 10
console.log(x, y)   // se imprime 1, 15
y = 'sometext'
console.log(x, y)   // se imprime 1, sometext
x = 4               // provoca un error

// arrays
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // se imprime 4
console.log(t[1])     // se imprime -1

t.forEach(value => {
    console.log(value)  // se imprimen los números 1, -1, 3, 5 cada uno en su propia línea
})

// el metodo concat crea un nuevo array
const t1 = [1, -1, 3]

const t2 = t1.concat(5) // crea un nuevo array

console.log(t1)  // se imprime [1, -1, 3]
console.log(t2) // se imprime [1, -1, 3, 5]

// metodo map
const t3 = [1, 2, 3]

const m1 = t3.map(value => value * 2)
console.log(m1) // se imprime [2, 4, 6]


const m2 = t3.map(value => '<li>' + value + '</li>')
console.log(m2)
// se imprime [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]



// desestructuracion
// lo que hace es crear una variable que contenga el resto de los valores
const q = [1, 2, 3, 4, 5]

const [first, second, ...rest] = q

console.log(first, second)  // se imprime 1, 2
console.log(rest)          // se imprime [3, 4 ,5]


// objetos 
const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}


console.log(object1.name)         // se imprime Arto Hellas
const fieldName = 'age'
console.log(object1[fieldName])    // se imprime 35


object1.address = 'Helsinki'
object1['secret number'] = 12341



// funciones 
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

// invocamos la funcion
const result = sum(1, 5)
console.log(result)

// si existe un solo parametro, se puede excluir los parentesis
const square = p => {
    console.log(p)
    return p * p
}

// y si la funcion contiene una expresión, tambien se pueden exluir las llaves
const square2 = p => p * p


// se puede utilizar el metodo map 
const tupla = [1, 2, 3]
const tSquared = tupla.map(p => p * p)
// tSquared ahora es [1, 4, 9]