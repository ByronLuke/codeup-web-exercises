let i = 2;
while (i<65588) {
    console.log(i)
    i = i*2;
}

// Do while
let allCones = Math.floor(Math.random() * 50) + 50;
do{
    let conesBought = Math.floor(Math.random() * 5) + 1;
    if(conesBought<allCones){
        console.log(`${conesBought} cones bought`)
        allCones-=conesBought;
    }
    else if(conesBought>allCones){
        console.log(`Cannot sell you ${conesBought} cones. I only have ${allCones} left`)
    }else{
        console.log("Yay! I sold them all!")
        break;
    }
}while(allCones>0)