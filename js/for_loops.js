let number = 1;

//Question 2
function showMultiplicationTable(number){
    for (let i = 1; i < 11; i++) {
        const result = number*i;
        console.log(`${number} x ${i} = ${result}`);
    }
}
showMultiplicationTable(number)

//Question 3
function evenOrOdd(){
    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
        if(randomNumber%2===0){
            console.log(`${randomNumber} is even!`)
        }
        else{
            console.log(`${randomNumber} is odd!`)
        }
    }
}
evenOrOdd();

//Question 4
for (let i = 1; i <=9 ; i++) {
        let result ='';
        result += i.toString().repeat(i);
        console.log(result)
    }

//Question 5

for (let i = 100; i > 0 ; i--) {
    if(i%5===0){
        console.log(i)
    }
}

