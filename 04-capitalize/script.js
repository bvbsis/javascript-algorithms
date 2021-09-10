/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    
    const arr = str.split(' ');
    
    arr.forEach(function(elem, index, array){
        if(!elem){
            return
        }
        const newArr = elem.split('');
        newArr[0] = newArr[0].toUpperCase();
        arr[index] = newArr.join('')
    });
    return arr.join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"