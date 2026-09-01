const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (music.paused) {
            music.play();
            musicBtn.textContent = "⏸ Pause Music";
        } else {
            music.pause();
            musicBtn.textContent = "Play Music"; 
        }

    });

}
const cart = document.querySelector("#cart");
const popup = document.querySelector("#popup");
const popupX = document.querySelector("#popup-X");


cart.onclick = () => {
    popup.style.display = "flex";
}
popupX.onclick = () => {
    popup.style.display = "none";
}




const addcart = document.querySelectorAll(".card-btn");
const counter = document.querySelector("#counter");
const cartSec = document.querySelector("#cartSec");
var i = 1;

addcart.forEach((add) => {

    add.addEventListener("click", () => {
        counter.textContent =i++ ;
    });
})