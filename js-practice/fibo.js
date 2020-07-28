function fibonacci(limit) {
    var previous = 1;
    var current = 1;
    var aux = 0;
    var fibos = [];
    while (previous <= limit) {
        fibos.push(previous);
        aux = current;
        current += previous;
        previous = aux;
    }
    return fibos;
}
console.log(fibonacci(15));
console.log(fibonacci(5));
// function fibonacci(limit) {
//     var previous = 1;
//     var current = 1;
//     var fibos = [];
//     while (previous <= limit) {
//         fibos.push(previous);
//         previous = [current, current += previous][0];
//     }
//     return fibos;
// }
// console.log(fibonacci(15));
// console.log(fibonacci(5));

// function fibonacci(limit){
//     return limit < 1 ? [] : fibonacciAux(limit);
// }

// function fibonacciAux(limit){
//     var fibos = [1, 1];
//     while(fibos[fibos.length - 2] + fibos[fibos.length - 1] <= limit){
//         fibos.push(fibos[fibos.length - 2] + fibos[fibos.length - 1]);
//     }
//     return fibos;
// }

// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(15));
// console.log(fibonacci(5));

