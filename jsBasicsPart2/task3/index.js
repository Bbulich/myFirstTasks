let arr = [1, 10, 15, -100, -23, 19, 15032];
let secondArr = [];

for(let i = 0; i < arr.length; i++){
    secondArr.push(arr[i] + arr[i] * 25 / 100);
}
console.log(arr);
console.log(secondArr);