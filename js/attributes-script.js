const body = document.body;
const div = document.querySelector("div");
const profileImage = document.querySelector("#profile-pic");
const profileName = document.querySelector("#profile-name")
const profileDesc = document.querySelector("#profile-desc");
const profileCard = document.querySelector("#profile-card")

//3.1
setTimeout(function () {
    profileImage.setAttribute("src", "images/robot.avif")
     }, 2000);

//3.2
setTimeout(function () {
    profileName.innerHTML="Hi, I'm Lewis 2.0. "
}, 4000);

//3.2

setTimeout(function () {
    profileCard.classList.add("cardChanges")
    profileDesc.style.fontFamily="Roboto";
    profileDesc.innerText="Beep boop.";
},   6000);

//3.4
function toggleBackgroundColor() {
    profileCard.classList.toggle("backgroundColor")
    profileDesc.style.color="hotpink";
}setInterval(toggleBackgroundColor,2000);
