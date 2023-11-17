function konami (){
    //Adding the main boss
    const image = document.createElement("img");
    image.src = "https://media.giphy.com/media/vjZkgd6XlhPHSZgQNY/giphy.gif";
    document.body.appendChild(image)
    //h1
    const title = document.querySelector("h1");
    title.innerText = "New Boss Unlocked. Tread Lightly brutha."
    //Adding sick audio
    const audio =new Audio("mp3/rocky.mp3");
    audio.play();
    //background color
    const background = document.querySelector("body");
    background.style.backgroundColor= "red";
}
const konamiCode =["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

const keysPressed = [];

document.addEventListener("keyup", event => {
        keysPressed.push(event.key);
        if(keysPressed.length===konamiCode.length){
            let codeEntered = true;
            for (let i = 0; i < konamiCode.length; i++) {
                if(keysPressed[i] !== konamiCode[i]){
                    codeEntered = false;
                    break;
                }
            } if(codeEntered){
                konami();
            }else{
            }
        }
    }
);

function michaelScott (){
    //h1
    const title = document.querySelector("h1");
    title.innerText = "Congratulations you've won an exclusive viewing to Threat Level Midnight."
    //Threat level midnight (Gods gift to Man)
    const video = document.createElement("video");
    video.src="mp4/theOffice.mp4"
    video.height = 500;
    video.controls = true;
    document.body.appendChild(video)
}
const dunder =["t", "h", "a", "t", "s", "w", "h", "a", "t", "s", "h", "e", "s", "a", "i", "d"];

const keysPressed2 = [];

document.addEventListener("keyup", event => {
        keysPressed2.push(event.key);
        if(keysPressed2.length===dunder.length){
            let codeEntered = true;
            for (let i = 0; i < dunder.length; i++) {
                if(keysPressed2[i] !== dunder[i]){
                    codeEntered = false;
                    break;
                }
            }if(codeEntered){
                michaelScott();
            }else{
            }
        }
    }
);