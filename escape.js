'use strict'

const clock = document.querySelector('#clock');
console.dir(clock);
clock.style.display = "none";

const task1 = function () {
    const box = prompt("Voer het password hier in");
    const parsed = box.toUpperCase();
    if (parsed == "FIBONACCI") {
        const alert1 = alert("Correct! Klick voor de volgende opdracht")
    } else return prompt("Incorrect. Probeer opnieuw")

    console.log(window.alert1);
    if(window.alert1 === undefined) {
        clock.style.display = "block";
    }

}

const button = document.querySelector(".btn1");
button.addEventListener("click", task1);

