let x = 7;
x+=3;
x-=4;
x = x.toString()
x=9.123;
//console.log(x);

y = isNaN(true)
//console.log(y)

let name = "Byron";
name = name.replace("Byron", "Replacement")
let nameLength= name.length;
let firstLetter = name.lastIndexOf("R");
let substring = name.substring(2)


/*console.log("Name is " +name);
console.log("Characters in name is " + nameLength);
console.log("Index of first character is always " + firstLetter);
console.log("Substring up to 2 is " + substring);*/

let firstName = 'John';
let lastName = 'Doe';
let fullName = `${firstName} ${lastName}`;

//console.log(`My full name is  ${firstName} ${lastName}`);

//Question 1
let a = 1;
let b = a++;
let c =++a;
// What is the values of a, b, c
//console.log("A= " + a + " B= " + b + " C= " + c);

let d = "hello";
let e = false;
d++;
e++;
//console.log("D= " + d + " E= " + e);

let perplexed; // perplexed is undefined (no value is assigned)
perplexed = perplexed + 2;
//console.log(perplexed);

let price = 2.7;
price.toFixed(2);
//console.log(price)

//let priceTwo = "2.7";
//priceTwo.toFixed(2);
//console.log(priceTwo)//uncaught ype error. toFixed not a function of string but for number

//Question 2
let sample = "Hello Codeup";
let sampleCharacters = sample.length;
let sampleUpperCase = sample.toUpperCase();
let sampleConcat = sample + " Students";
let sampleReplace = sampleConcat.replace('Students','Class');
let sampleIndexc = sample.indexOf("c");
let sampleIndexC = sample.indexOf("C");
let sampleSubstring = sample.substring(sample.indexOf("C"));
/*console.log(`QUESTION 2 ANSWERS: Characters is ${sampleCharacters}, Uppercase is ${sampleUpperCase},
    Concat is ${sampleConcat}, Replace is ${sampleReplace}, Index of c is ${sampleIndexc}, 
    Index of C is ${sampleIndexC}, Substring is ${sampleSubstring}`);*/

//Question 3
let littleMermaid = 3;
let brotherBear = 5;
let Hercules = 1;
let pricePerDay = 3;

let Google = 400;
let Amazon = 380;
let Facebook = 350;
let googleHours = 6;
let amazonHours = 4;
let facebookHours = 10;

console.log(`QUESTION 3A ANSWERS: Little mermaid has ${pricePerDay*littleMermaid} days left, Hercules has
${pricePerDay*Hercules} days left, and Brother Bear has ${pricePerDay*brotherBear} days left`);
console.log(`QUESTION 3B ANSWERS: You earned $${Google*googleHours} for Google this week, you also earned 
$${Amazon*amazonHours} for Amazon, and you earned $${Facebook*facebookHours} at Facebook!`);