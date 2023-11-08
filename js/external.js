// Added console.log message
console.log("Hello from external JavaScript");

// 1.
alert("Welcome to my Website!");

// 2.
let userColor = prompt("What is your favorite color?");
alert(`That's crazy talk, ${userColor} is my favorite color too. What are the chances huh?!`);

// 3.1
const littleMermaidDays = 3;
const brotherBearDays = 5;
const herculesDays = 1;

const pricePerDay = 3;

const totalMovieCost = (littleMermaidDays + brotherBearDays + herculesDays) * pricePerDay;
console.log(`Total movie rental cost: $${totalMovieCost}`);

// 3.2
const googleRatePerHour = 400;
const amazonRatePerHour = 380;
const facebookRatePerHour = 350;

const googleHoursWorked = 6;
const amazonHoursWorked = 4;
const facebookHoursWorked = 10;

const totalPayment = (googleRatePerHour * googleHoursWorked) +
    (amazonRatePerHour * amazonHoursWorked) +
    (facebookRatePerHour * facebookHoursWorked);

console.log(`Total payment for the week: $${totalPayment}`);
