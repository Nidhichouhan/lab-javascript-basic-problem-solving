// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
var ProGrad_1 = "Nidhi";
// 1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is " + ProGrad_1);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
var ProGrad_2 = "Laxmi";
// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is " + ProGrad_2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
var len = 0;
var i = 0;
while (ProGrad_1.charAt(i) != 0) {
  len++;
  i++;
}
var len1 = 0;
var i = 0;
while (ProGrad_2.charAt(i) != 0) {
  len1++;
  i++;
}
if (len > len1) {
  console.log("The driver has the longest name, it is " + len + " characters");
} else if (len < len1) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      len1 +
      " characters"
  );
} else {
  console.log(
    "Wow, you both have equally long names " + len || len1 + " characters"
  );
}
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// 2.2. Check if the string contains vowels or not.
function vowels(str1) {
  var vowel_letters = "aeiouAEIOU";
  var counter = 0;
  var out = [];
  var vowel_array = [];
  for (var x = 0; x < str1.length; x++) {
    for (var y = 0; y < vowel_letters.length; y++) {
      if (str1[x] == vowel_letters[y]) {
        counter += 1;
        vowel_array += vowel_letters[y];
      }
    }
  }
  if (counter != 0) {
    out = [str1, counter, vowel_array];
    return out;
  }
}
console.log(vowels(ProGrad_1));
console.log(vowels(ProGrad_2));
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5.

// 2.3. Check if the string contains uppercase and lowercase characters Xx
function countUpperCase(str) {
  var counter = 0;
  len = str.length;
  for (var i = 0; i < len; i++) {
    RegExp = /^[A-Z]/;
    if (RegExp.test(str.charAt(i))) {
      counter++;
    }
  }
  return counter;
}

function countLowerCase(str) {
  var counter = 0;
  len = str.length;
  for (var i = 0; i < len; i++) {
    RegExp = /^[a-z]/;
    if (RegExp.test(str.charAt(i))) {
      counter++;
    }
  }
  return counter;
}
console.log(countUpperCase(ProGrad_1));
console.log(countUpperCase(ProGrad_2));
console.log(countLowerCase(ProGrad_1));
console.log(countLowerCase(ProGrad_2));
// - Print the number of upper case characters
// - Print the number of lower case characters

// Progression 3: Control Statements - 2
// function Conversion(str) {
//     var res = Array.from(str);
//     return res[1], res[2];
// }
// function Upper(str){
//     var res=Array.from(str);
//     len=res.length;
//     for(var i=0; i<=length; i++){

//     }
// }
// console.log(Conversion(ProGrad_1));
// console.log(Conversion(ProGrad_2));
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

var var_array = [];
var out = [];
var res = Array.from(ProGrad_1);
len = res.length;
for (var i = 0; i < len; i++) {
  var_array += res[i] + " ";
}
out = var_array;
console.log(" " + out.toUpperCase());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
var var_array = [];
var out = [];
var res = Array.from(ProGrad_2);
len = res.length;
for (var i = len - 1; i >= 0; i--) {
  var_array += res[i] + " ";
}
out = var_array;
console.log(" " + out.toUpperCase());

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"

console.log(ProGrad_1 + " " + ProGrad_2);
console.log(ProGrad_2 + " " + ProGrad_1);
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
function lexicographic(str) {
  return str.toUpperCase().split("").sort().join("").toLowerCase();
}
console.log(lexicographic(ProGrad_1));
console.log(lexicographic(ProGrad_2));
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
