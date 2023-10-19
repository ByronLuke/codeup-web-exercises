let number = 7;

function showMultiplicationTable(number){
    for (let i = 1; i < 11; i++) {
        const result = number*i;
        console.log(`${number} x ${i} = ${result}`);
    }
}console.log(showMultiplicationTable(number))

