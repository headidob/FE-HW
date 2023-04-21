// 1. Дан случайный массив чисел (создайте самостоятельно).
// С помощью метода `.filter()` отфильтруйте массив так,
// чтобы в новый массив вошли только четные двухзначные числа из исходного.

// ________________________________________________________________
let randomArray = [12, 13, 56, 4, 5, 90, 120,36, 35];

// //variant 1___________________________
function checkNumber(number){
    return number >= 10 && number <100 && number % 2 === 0;
}

console.log(randomArray.filter(checkNumber));

// //variant 2_________________________
let filteredArray = randomArray.filter(number => number >= 10 && number <100 && number % 2 === 0);

console.log(filteredArray);

// 2. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода `.every()` проверить были ли все введенные
// пользователем данные – числами.
//_______________________________________________
let number = 0;
let array = [];
let counter = 1;

do{
    array.push(number = prompt('Enter your number ' + counter))
    counter++
}while(counter <= 10)

array.every(number => !isNaN(number)) ?
    console.log('All values are numbers'):
    console.log('Not all values are numbers');

// 3. Дан массив объектов
// ```js
const arr = [
  {a: 2, b: 1},
  {a: 5, b: 9},
  {a: 95, b: 7}
]

// - Вывести в консоль `'its valid'`, если во всех объектах поле `a > b`, вывести `'its invalid'` если хотя бы в одном объекте `a<=b`

arr.every(({a, b}) => a > b) ? console.log('its valid'): console.log('its invalid')

//На основе массива arr, создать массив объектов у которых поле b возведено в квадрат
const arr2 = [];
arr.forEach(v => arr2.push(Object.assign({}, v)));

//variant 1
let funk = function (object){object.b = object.b**2; return object };
console.log(arr2.map(funk));

//variant 2
console.log(arr2.map(object => {object.b = object.b**2; return object}));
console.log(arr);
