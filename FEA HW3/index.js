
// 1. Пользователь вводит **ТРИ** числа
// вывести в консоль наибольшее из них.
// В этой задаче необходимо сделать проверку на число (нужно убедиться, что пользователь ввел именно число)


//**Некоторые задачи решал 2 способами, просто чтобы вспомнить массивы */
//variant nr.1


let firstNumber = Number(prompt('Enter first number'))
while (isFinite(firstNumber) === false) {
    firstNumber = Number(prompt('You entered incorrect value, please enter correct first number'))    
}
let secondNumber = Number(prompt('Enter second number'))
while (isFinite(secondNumber) === false) {
    secondNumber = Number(prompt('You entered incorrect value, please enter correct second number'))    
}
let thirdNumber = Number(prompt('Enter third number'))
while (isFinite(thirdNumber) === false) {
    thirdNumber = Number(prompt('You entered incorrect value, please enter correct third number'))    
}


if(firstNumber >= secondNumber){
    if (firstNumber > thirdNumber){
        console.log(`Biggest number is ${firstNumber}`)
    }else{
        console.log(`Biggest number is ${thirdNumber}`)
    }
}else{
    if(secondNumber >= thirdNumber){
        console.log(`Biggest number is ${secondNumber}`)
    }else{
        console.log(`Biggest number is ${thirdNumber}`)
    }
}

//variant Nr.2


let numbers = [];

    for (let i = 0; i <=2 ; i++) {
        numbers[i] = Number(prompt(`Enter ${i+1} number`))
        while (isFinite(numbers[i]) === false) {
            numbers[i] = Number(prompt(`You entered incorrect value, please enter ${i+1} number`));
        }
    }

console.log(`Biggest number is ${Math.max(...numbers)}­`)








// 2. Используя конструкцию switch, напишите
// программу, которая переводит числа в слова.
// Например: пользователь вводит число 2,
// программа выводит «Два». Программу необходимо сделать для цифр от 0 до 5 (включительно)

let number = Number(prompt('Please enter whole number from 0 to 5'))

while (isFinite(number) === false) {
    number = Number(prompt('You did not entered number, please enter number from 0 to 5'))    
 }

while ((number >= 0 && number <= 5) === false){
    number = Number(prompt('You entered incorrect value, please enter number from 0 to 5'))
 }

 console.log(number)

 switch (number) {
    case 0:
        console.log('zero')
        break;
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    case 4:
        console.log('four');
        break;
    case 5:
        console.log('five');
        break;
    default:
        console.log('not whole number :)');
        break;
 }



// 3. Дан следующий код:

// ```js
//     let age = 10;

//     if (age < 10) {
//         console.log('hi!');
//     } else if (age < 20) {
//         console.log('hello!');
//     } else {
//         console.log('good day!');
//     }
// ```

// Необходимо переписать этот код используя `тернарный оператор`

let age = 20;
age < 10 ? console.log('hi!') : 
age >= 10 && age < 20 ? console.log('hello!') : console.log('good day!');


// 4. Написать программу для проверки таблицы умножения:
//     1. Пользователь вводит число `a`
//     2. Пользователь вводит число `b`
//     3. Пользователь вводит ответ на `a * b`

// Нам необходимо проверить ответ пользователя на корректность, если пользователь ответил неправильно то выводим ответ вида:
// **Ошибка! Правильный ответ: `correctAnswer`**

// Где `correctAnswer` - это переменная, в которой находится правильный ответ

// Если пользователь ввел правильный ответ, то выводим сообщение вида:
// **Правильно!**

//variant 1

let firstNumber = Number(prompt('Enter first number'))
while (isFinite(firstNumber) === false) {
        firstNumber = Number(prompt('You entered incorrect value, please enter correct first number'))    
    }

let secondNumber = Number(prompt('Enter second number'))
while (isFinite(secondNumber) === false) {
        secondNumber = Number(prompt('You entered incorrect value, please enter correct second number'))    
    }

let userResult = Number(prompt('Enter result'))
while (isFinite(userResult) === false) {
        userResult = Number(prompt('You entered incorrect value, please enter number'))    
    }

let correctAnswer = firstNumber * secondNumber;

if (correctAnswer === userResult ) {
    console.log('Правильно!')
}else{
    console.log(`Ошибка! Правильный ответ: ${correctAnswer}`);
}

// Variant 2

let numbers = [];

for (let i = 0; i <=2 ; i++) {
    if(i<2){
    numbers[i] = Number(prompt(`Enter ${i+1} number`))
        while (isFinite(numbers[i]) === false) {
            numbers[i] = Number(prompt(`You entered incorrect value, please enter ${i+1} number`));
            }
        }else{
            numbers[i] = Number(prompt(`Enter RESULT number`))
        while (isFinite(numbers[i]) === false) {
            numbers[i] = Number(prompt(`You entered incorrect value, please enter RESULT number`));
            }
        }
    }

// Выше else использую только чтобы в промт выпадавала другая фраза отличная от ввода операндов
    
let correctAnswer = numbers[0] * numbers[1]

    if (correctAnswer === numbers[2]) {
        console.log('Правильно!')
    }else{
        console.log(`Ошибка! Правильный ответ: ${correctAnswer}`);
    }

