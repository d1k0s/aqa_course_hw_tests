/*
Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). 
Функция принимеют на вход массив и колбэк. Используйте дженерик типы. 
   Затипизировать надо саму функцию и коллбэк.
   Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
   где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
   Пример:
   map([1,2,3,4,5], callback) => [0,2,6,12,20]
*/

function maP<T, U> (arr: T[], callback: Function): U[] {
   const result: U[] = [];
   arr.forEach((item, index) => {
      result.push(callback(item, index))
   })
   return result;
}

const numberArray = [1, 2, 3, 4, 5];
console.log(maP(numberArray, (item: number, index: number) => item * index));