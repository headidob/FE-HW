
// 1. Дан массив 
// `["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];`
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив


const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]

const result = arr.splice(2,3)

console.log(result);

// 2. Дан массив
// `["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];`
// Переставить "Janett", "Franz" в начало массива

let arr2 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]

arr2 = arr2.splice(5).concat(arr2)

console.log(arr2);


// 3. Дан массив 
// `["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];`
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"

const arr3 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]

arr3.splice(4,2,"Oleg","Valerchik")

console.log(arr3);

// 4. Дан массив 
// `["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];`
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

let arr4 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]

arr4.reverse().splice(0,4,"Mitrofan", "Mitrofan", "Mitrofan", "Mitrofan" )

console.log(arr4);


// 5. Даны два массива 
// `["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]`
// `["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]`
// Взять из второго массива все имена начина с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)

let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
const arr2 = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]

arr = arr2.splice(2).concat(arr)

console.log(arr)


// 6. Дана строка
// `'Мама мыла раму'`
// С помощью `prompt()` получите строку.
// Поменяйте в строке `'Мама мыла раму'` слово `раму` на полученное слово
// Например:
// ```
// prompt() ===>>> 'машину'
// // ‘Мама мыла машину’
// prompt() ===>>> 'рябину'
// // ‘Мама мыла рябину’
// prompt() ===>>> 'картину'
// // ‘Мама мыла картину’
// ```

let originalPhrase = 'Мама мыла раму'
let userWord = prompt("Что мыла мама? Веедите 1 слово")

let phraseToMassive = originalPhrase.split(' ')

phraseToMassive.splice(2,1,userWord)

let newPhrase  = phraseToMassive.join(' ')

console.log(newPhrase)







