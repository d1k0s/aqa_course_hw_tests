/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  // Ваш код
  if (word === '') {
    return true
  } else if (typeof word !== 'string' || word === null || word == {}) {
    return false
  } else { 
    const wordLower = word.toLowerCase();
    let wordBackwords = [];
    let wordArr = [...wordLower];
    for (let i = wordArr.length - 1; i >= 0; i--) {
      wordBackwords.push(wordArr[i])
    }
    wordBackwords = wordBackwords.join('')
    return wordLower === wordBackwords ? true : false
  }
}
console.log(isPalindrom('MadAm'))

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  // Ваш код
  let maxL = 0
  let maxWords = []
  if (sentence === '' || typeof sentence !== 'string' || sentence == null) {
    return maxWords
  } else {
    const sentenceArr = sentence.split(' ');
    for (const el of sentenceArr) {
      let spreadEl = [...el];
      if (spreadEl.length > maxL && maxWords != []) {
        maxL = spreadEl.length;
        maxWords.length = 0;
        maxWords.push(spreadEl.join(''));
      } else if (spreadEl.length === maxL) maxWords.push(spreadEl.join(''))
    }
    return maxWords
  }
}
console.log(findLongestWords());

export { isPalindrom, findLongestWords };
