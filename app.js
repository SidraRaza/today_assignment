// question#1
function countTheNumberOfVowels(str) {
    return str.length;
}
console.log(countTheNumberOfVowels("aeiou"));
// question#2
function numberIsNotPrime(num1) {
    let num2 = 2;
    let result = num1 % num2;
    if (result === 0) {
        console.log("Number is not prime ");
    }
    else {
        console.log("Number is prime ");
    }
    return result;
}
console.log(numberIsNotPrime(12));
console.log(numberIsNotPrime(3));
// question#3
function firstNonRepeatedCharacter(string) {
    for (let i = 0; i < string.length; i++) {
        let c = string.charAt(i);
        if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
            return c;
        }
    }
    return null;
}
console.log(firstNonRepeatedCharacter("aabbnjjkkff"));
function squareOfNumber(number) {
    return number * number;
}
console.log(squareOfNumber(4));
// question#5
function displyMessage() {
    console.log("Hello World");
}
displyMessage();
export {};
//  function nonRepeartingCharacter(str:string) {
//      let charCount={};
//      for(let char of str){
//       charCount[char]=(charCount[char] ||0)+1;
//      }
//      for(let char of str){
//       if(charCount[char]===1){
//          return char
//       }
//      }
// }
// let str="aabbncckkgg";
// console.log(nonRepeartingCharacter("aabbnccggkkff"));
