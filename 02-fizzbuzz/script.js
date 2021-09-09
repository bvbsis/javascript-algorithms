/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    const arr = [];
    for(let i = 0; i < num; i++){
        arr[i] = i + 1
    };
    arr.forEach(function(digit, index, array){
        if(!(Number.parseInt(digit) % 5) && !(Number.parseInt(digit) % 3)){
            array[index] = 'fizzbuzz'
        }else if(!(Number.parseInt(digit) % 5)){
            array[index] = 'buzz'
        }else if(!(Number.parseInt(digit) % 3)){
            array[index] = 'fizz'
        }
        console.log(arr[index])
    });
    
}

// Протестируйте решение, вызывая функцию с разными аргументами:

fizzBuzz(30);