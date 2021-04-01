// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
const parkString = "I can walk in the park all day!"
console.log(parkString.slice(18,22));

// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
const greeting = "Hello World";
console.log(greeting.toUpperCase());

// 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. 
const alienGreeting = "Hello Earthling";
console.log(alienGreeting.toLowerCase());

// 4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
const language = "JavaScript";
console.log(language.slice(3,6));

// 5. Check if the sentence "nice shoes" contains the letter l or n. 
const shoe = "nice shoes";
console.log(shoe.includes("l"));

// 6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB
const fruit = "Apples";
console.log(fruit[0] + fruit + fruit[0]);

// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch
const vegetable = "Cucumber";
console.log(vegetable.slice(5,8) + vegetable + vegetable.slice(5,8));

// 8. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB
const dance = "Lindy Hop";
console.log(dance[dance.length - 1].toUpperCase() + dance.slice(1,8) + dance[0].toLowerCase());

// 9. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". 
const firstName = "Maxie";
const city = "Berlin";
const favoriteVegetable = "spinach";
console.log(`Hi. My name is ${firstName}. I live in ${city} and I love ${favoriteVegetable}.`);

// 10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
const foxString = "the quick brown fox";
console.log(foxString[0].toUpperCase() + foxString.slice(1, 19));







