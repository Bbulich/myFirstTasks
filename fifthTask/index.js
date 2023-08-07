//Вывод true т.к. 10 равно 10
console.log(10 == 10);

//Вывод false т.к. 10 равно 10
console.log(10 != 10);

//Вывод false, т.к. 12 не равно строке Привет
console.log(12 == 'Привет')

//Вывод true, т.к. 10 меньше 11
console.log(10 < 11)

//Вывод false, т.к. 12 меньше 20
console.log(12 > 20)

//Вывод true, т.к. логическое умножение 1(true) на 1(true) дает 1, т.е. правду
console.log(true && true)

// Вывод false, т.к. логическое умножение 0(false) на любое число дает 0
console.log(true && false)
console.log(false && true)

// Вывод true, т.к. логическое сложение 1(true) на любое число дает 1
console.log(false || true)
console.log(true || false)
console.log(true || true)

//Вывод true, т.к. 10 меньше или равно 10
console.log(10 <= 10)

//Вывод true, т.к. 18 меньше или равно 20
console.log(18 <= 20)

//Вывод true, т.к. 50 больше или равно 50
console.log(50 >= 50)

//Вывод true, т.к. 51 больше или равно 50
console.log(51 >= 50)

//Вывод false, поскольку хоть объекты и являются пустыми, но ссылаются на разные места в памяти
console.log({} === {})
console.log({} == {})