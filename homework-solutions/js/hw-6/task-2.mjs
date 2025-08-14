/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique = [];
let resultUnique2 = [];
let resultNull;
const competitorToLow = competitorPizzas.map(pizza => pizza.toLowerCase());

for (const item of myPizzasT1) {
  if (!competitorToLow.includes(item.toLowerCase())) {
    resultUnique.push(item);
  }
}
for (const item2 of myPizzasT2){
  if (!competitorToLow.includes(item2.toLowerCase())) {
    resultUnique2.push(item2);
  } 
}
resultNull = (resultUnique.length === 0 || resultUnique2.length === 0) ? null : undefined;
const allUniques = [...resultUnique, ...resultUnique2];

console.log(allUniques);
console.log(resultNull);

export { resultNull, resultUnique };
