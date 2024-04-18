// question#1

function countTheNumberOfVowels(str:string="aeiou"):number{
     return str.length;
}
console.log(countTheNumberOfVowels());

// question#2
function numberIsNotPrime(num1:number){
   let num2=2;
   let result=num1%num2
   if(result===0){
      console.log("Number is not prime ");

   }else{
      console.log("Number is prime ");
}
return result
}
console.log(numberIsNotPrime(12));

// question#3
function firstNonRepeatedCharacter(string:string) {
   for (let i = 0; i < string.length; i++) {
       let c = string.charAt(i);
       if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
           return c;
       }
   }
   return null;
}
console.log(firstNonRepeatedCharacter("aabbnjjkkff"));

// question#4
function squareOfNumber(number:number):number{
   return number*number
}
console.log(squareOfNumber(4));

// question#5
function displyMessage(){
   console.log("Hello World");
   
}
displyMessage();
