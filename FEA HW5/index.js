
const car = {
    model: 'tesla',
    adress: {
        country: {
            city: {
                name: 'Boston',
                street: {
                    name: 'pushkina',
                    number: 2
                }
            }
        },
        region: ['Iowa','Texas','California']
    },
    specs: {
        price: {
            low: 2000,
            mid: 3000,
            high: 5000
        },
        engine: {
            power: 400,
            lowPower: 100
        }
    }
};

// С помощью деструктуризации запишите в отдельны переменные:

// 1.2 Четвертый регион из поля `region` (по умолчанию значение должно быть `'Arizona'`)
// 1.3 Поле `high`, объекта `price` 
// 1.4 Из объекта `specs` записать поле `fuelConsumption`, которое по умолчанию должно являться объектом вида:
// ```js 
// { city: 12, mix: 10, country: 8 }

// 1.1 Название города в котором находится авто
const { 
    adress: { 
        country: { 
            city: { name: carLocationCity } 
        } 
    } 
} = car;

console.log(carLocationCity)

// 1.2 Четвертый регион из поля `region` (по умолчанию значение должно быть `'Arizona'`)
const { 
    adress: {
        region: [,,,cell = 'Arizona'] 
    } 
} = car

console.log(cell);

// 1.3 Поле `high`, объекта `price` 
const { 
    specs: {
        price: { high } 
        } 
    } = car

console.log(high);

// 1.4 Из объекта `specs` записать поле `fuelConsumption`, которое по умолчанию должно являться объектом вида:
// ```js 
// { city: 12, mix: 10, country: 8 }
const {
    specs: { 
        fuelConsumption = { 
            city: 12, 
            mix: 10, 
            country: 8 
        } 
    } 
} = car

console.log(fuelConsumption);


// 2. Дан объект:
// ```js
// const student = { math: 5, biology: 3, language: 2, isOboltus: true };
// 2.1 Напишите программу, которая умножит все **ЧИСЛОВЫЕ** (и
//     только числовые) значения на 2 и перезапишет каждое
//     свойство объекта (числового типа).

const student = { math: 5, biology: 3, language: 2, isOboltus: true };

for(key in student){

    if(typeof student[key] === 'number'){
        student[key] = student[key]*2;
    }
}
console.log(student);

// 2.2 Напишите программу, которая посчитает среднее арифметическое всех оценок студента.
// Если средняя оценка (после умножения) будет больше `5`, то поле `isOboltus` должно стать `false`.

let counter = 0;
let sum = 0;
const student = { math: 5, biology: 6, language: 7, isOboltus: true };

for(key in student){
    if (typeof student[key] === 'number') {
        sum += student[key]
        counter++        
    }
}

sum / counter > 5 ? student.isOboltus = false : student.isOboltus = true;

console.log(student);