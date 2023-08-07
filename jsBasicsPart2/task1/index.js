let a = 45365601;

function oddOrEven(num){
    if(a%2 === 0){               //Если остаток от деления на 2 равно нулю, то число четное
        console.log("Четное");
    } else {                    //Иначе выводим нечетное
        console.log("Нечетное")
    }
}

oddOrEven(a);

//Добавляем переменной 'a' 1
oddOrEven(++a);
