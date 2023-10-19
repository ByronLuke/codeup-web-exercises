let userInput;

while(true){
    userInput = parseFloat(prompt("Number between 1 and 50"))
    if(userInput <= 50 && userInput >= 1){
        break;
    }
    else{
        alert('Not a valid entry')
    }
}
for (let i = 1; i <= 50; i++) {
    if(i=== userInput){
        console.log(`Here is your number ${userInput}!`)
        continue;
    }
    if(i%2!==0){
    console.log(`Odd number ${i}`)
}
}