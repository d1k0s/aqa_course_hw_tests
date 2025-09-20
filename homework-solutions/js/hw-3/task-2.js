/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
let n_0 = 7 
const n = String(n_0);
const nn = parseInt(n + n);
const nnn = parseInt(n + n + n);

console.log(parseInt(n) + nn + nnn);

