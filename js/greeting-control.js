import {generateRandomGreeting} from "./greeting-logic.js";

document.querySelector("#greetingsForm").addEventListener("submit",(evt)=>{
evt.preventDefault()
    const input = document.querySelector("#name");
    const username = input.value;
    window.alert(`${generateRandomGreeting()} ${username}`);
});