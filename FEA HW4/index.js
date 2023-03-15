

// 1. task

// 1. Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. 
// Пользователь вводит числа с помощью `prompt()` до тех пор пока не нажмет **отмена**.
// Пример вывода:
// Положительных: 2 шт. Отрицательных: 5 шт. Нулей: 3 шт.


let possitiveCounter = 0
let negativeCounter = 0
let zeroCounter = 0
let breakPoint = 0


do{
    let userInput = prompt('Please enter any number, to abord click CANCEL')

    if (isNaN(userInput) || userInput === ''){
        alert('Please enter number')
        continue
    }

    if (userInput === null){
        break;
    }

    userInput = +userInput
    
    if (userInput > 0){
        possitiveCounter++
    } else if(userInput < 0){
        negativeCounter++
    }else{
        zeroCounter++
    }

    breakPoint++
    
}while(breakPoint > 0) 


if(breakPoint < 1){
    console.log("You cancelled action without entering any number");
}else{
console.log(`You entered ${possitiveCounter} possitive numbers, ${negativeCounter} negative numbers and ${zeroCounter} zeros`)
}

// 2.task

// 2. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается, когда нажали **отмена**, после чего выводится
// среднее арифметическое.

let sum = 0
let counter = 0

for( ; ; ){
    let userInput = prompt('Please enter any number, to abord click CANCEL')

    if (isNaN(userInput)){
        alert('Please enter number')
    }

    if (userInput === null || userInput === ''){
        break;
    }

    userInput = +userInput

    sum += userInput

    counter++
}

if(counter < 1){
    console.log('You canceled without enteringa ny number');
}else{
console.log(`average of ${counter} entered numbers is ${sum / counter}`)
}

// 3. Task
// 3. Написать программу, в которой пользователя просят ввести числа **5 раз**. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// текст **ошибка!** в консоль и прекратить ввод.


let previouseNumber 
let counter = 0

for( ; counter < 5 ; ){

    let userInput = prompt('Please enter number bigger than previouse')

    if(userInput === null || userInput === '' || isNaN(userInput)){
        alert('Please enter a number')
        continue
    }

    userInput = Number(userInput)
    
    if(previouseNumber >= userInput){
        console.log('Error');
        break;
    }
 
    previouseNumber = userInput

    counter++    
}

if(counter === 5){
console.log('Operation has finished succesfully')
}

// 4.Task
// 4. Написать программу-генератор популярных песен.
// Пользователь вводит число. Вывести количество **pam** равное этом числу.
// Строка должна начинаться с **param**.
// Например:
// Вводим 3
// Программа выводит: "param-pam-pam-pam"
// Вводим 5
// Программа выводит: "param-pam-pam-pam-pam-pam"
// ==В этом задании запрещено использовать `.repeat()` (все делаем циклом)==

let userInput = 0
const pam = '-pam'
let song = 'param'

do{
    userInput = prompt('Please enter a number')
    if(isNaN(userInput)){
        alert('Please input number')
    }

    userInput = Number(userInput)
       
}while(isNaN(userInput))

for (let i=1 ; i <= userInput; i++){
    song += pam
}

console.log(song);


