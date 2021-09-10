/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 * 
*/

function sumOfTwo(arr, num) {
    let result = false;
    arr.forEach(function(elem, index){
        for(let i = 0; i < arr.length; i++){
            if(elem + arr[i] == num && index != i){
                result = true;
            }
        }
    });
    return result
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(sumOfTwo([2, 7], 4)); // true (так как 1 + 3 === 4)
console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false