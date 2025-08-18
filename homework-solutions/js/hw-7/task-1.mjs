/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  // Ваш код
  return arrays.flat();
}
console.log(mergeArrays([1,2], [3,4], [5,6]))
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  // Ваш код
  const cleanSentence = sentence.replace(/\s+/g, ' ').trim();
  let arrSentence = [...cleanSentence.toLowerCase()];
  for (let idx = 0; idx < arrSentence.length; idx++) {
    if (arrSentence[idx] === ' ') {
      arrSentence.splice(idx, 1, '_');
      if (idx + 1 < arrSentence.length && arrSentence[idx + 1] !== ' ') {
        arrSentence.splice(idx + 1, 1, arrSentence[idx + 1].toUpperCase());
      }
    }
  }

  return arrSentence.join('');
}

// Проверка
console.log(devideBy('I    am    an     engineer'));

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  // Ваш код
  if (n === 0) return 0;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b
}
console.log(fibonacci(8))

export { mergeArrays, fibonacci, devideBy };
