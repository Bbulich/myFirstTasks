function calc(a, b, operation) {
    let calculation;
    switch(operation){
        case '+':
            calculation = a + b;
            break;
        case '-':
            calculation = a - b;
            break;
        case '*':
            calculation = a * b;
            break;
        case '/':
            calculation = a / b;
            break;
    }
    return calculation;
}
  
  console.log(calc(1, 2, '+')); // 3
  console.log(calc(1, 2, '-')); // -1
  console.log(calc(2, 2, '*')); // 4
  console.log(calc(4, 2, '/')); // 2