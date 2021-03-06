/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
    if(!n){
        return 0
    };
    const arr = [n];
    for (let i = n - 1; i > 0; i--){
        arr.unshift(i)
    };
    let a = 0;
    arr.forEach(function(elem){
        elem = String(elem);
        const arrOfElem = elem.split('');
        arrOfElem.forEach(function(elem){
            if(elem == 0){
                a++
            }
        });
    });
    return a;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
