// NAME: Convert string to camel case

// INSTRUCTIONS: 
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples:
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// Solution: 

// SOLUTION 1
function toCamelCase(str){
  return str.split(/[-\_]/).map((word, i) => {
    if (i > 0) {
    word = word.charAt(0).toUpperCase() + word.slice(1)
      return word
    }
    return word
  }).join('')
}

// SOLUTION 2
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
