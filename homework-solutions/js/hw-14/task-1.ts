/*

1. Создайте дженерик функцию wrapInArray, которая принимает значение любого типа 
и возвращает его в виде массива этого типа.
    function wrapInArray<T> {
      // ваш код здесь
    }

    const numberArray = wrapInArray(5); // [5]
    const stringArray = wrapInArray('Hello'); // ['Hello']

2. Создайте дженерик функцию getLastElement, которая принимает массив элементов типа T,
 и возвращает последний элемент (типа T).

    function getLastItem<T> {
      // ваш код здесь
    }

    console.log(getLastItem([1, 2, 3, 4])); // 4
    console.log(getLastItem(['a', 'b', 'c'])); // 'c'


3. Создайте дженерик интерфейс IPair, который принимает два типа T и U и 
содержит поля first: T и second: U. 
   Реализуйте функцию, принимающую IPair и возвращающую строку, описывающую пару.

    interface IPair<T, U> {
      // ваш код здесь
    }

    function describePair<T, U> {
      // ваш код здесь
    }

    console.log(describePair({ first: 'Alice', second: 30 })); // "Alice and 30"
*/

function wrapInArray<T>(value: T): T[] {
    // ваш код здесь
    return [value]
}

  const numberArray = wrapInArray(5); // [5]
  const stringArray = wrapInArray('Hello'); // ['Hello']

  console.log(numberArray);
  console.log(stringArray);

function getLastItem<T>(arr: T[]): T {
  const lastElement = arr[arr.length - 1];
  return lastElement;
}

console.log(getLastItem([1, 2, 3, 4])); // 4
console.log(getLastItem(['a', 'b', 'c'])); // 'c'

interface IPair<T, U> {
  first: T;
  second: U;
}
function describePair<T, U> (pair: IPair<T, U>): string {
    // ваш код здесь
    return `${pair.first} and ${pair.second}`
}

console.log(describePair({ first: 'Alice', second: 30 })); // "Alice and 30"