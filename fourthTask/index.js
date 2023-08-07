//Вывод в консоль 'string' т.к. тип является строкой
console.log(typeof 'Hello');

//Вывод в консоль 'number' т.к. тип является числом
console.log(typeof 10);

//Вывод в консоль 'object' т.к. тип является объектом
console.log(typeof {});

//Вывод в консоль 'object' т.к. это особенность JS :D
console.log(typeof null);

//Вывод в консколь 'undefined' т.к. неопределенно :|
console.log(typeof undefined);

//Вывод в консоль 'boolean' т.к. тип является булевым значением
console.log(typeof true);

//Вывод в консоль 'object', хотя это массив, опять особенности JS
console.log(typeof []);

//Вывод в консоль 'function' т.к. тип является функцией
console.log(typeof (() => {}));
