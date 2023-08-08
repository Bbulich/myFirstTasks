// function sayHello(name){
//     if(name === undefined){
//         return 'Hello, someone!'
//     }
//     return `Hello, ${name}!`;
// }

let sayHello = (name) =>(name === undefined) ? 'Hello, someone!' : `Hello, ${name}!`;

console.log(sayHello("Mr. White, Yo"));