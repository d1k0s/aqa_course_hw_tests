/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 40 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  // Ваш код
  if (!character || !character.name || !character.age) {
    throw new Error('Invalid input')
  } 
  characters.push(character)
  return characters;
  }
  


function getCharacter(name) {
  // Ваш код
  return characters.find(character => character.name === name);
  
}

function getCharactersByAge(minAge) {
  // Ваш код
  if (typeof minAge !== 'number') throw new Error('invalid input');
  const result = characters.filter(character => character.age >= minAge);
  return result;
}

function updateCharacter(name, newCharacter) {
  if (!newCharacter || !newCharacter.name || !newCharacter.age) {
    throw new Error('Invalid input');
  }
  
  const index = characters.findIndex(char => char.name === name);
  
  if (index === -1) {
    throw new Error('Character not found');
  }
  
  characters[index] = newCharacter;
  return characters;
}

function removeCharacter(name) {
  // Ваш код
  const charIndex = characters.findIndex(char => char.name == name);
  if (charIndex === -1) throw new Error('person not found') 
  characters.splice(charIndex, 1);
  return characters;
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
