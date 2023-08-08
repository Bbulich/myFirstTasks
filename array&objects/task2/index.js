function sum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

const arr = [1, 50, 20, 75, 90];

console.log(sum(arr)); // 236