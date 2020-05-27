'use strict'

const clock = document.querySelector('#clock');
console.dir(clock);
clock.style.display = "none";

const task1 = function () {
    const box = prompt("Voer het password hier in");
    const parsed = box.toUpperCase();
    if (parsed == "MONA LISA") {
        const alert1 = alert("Correct! Klick voor de volgende opdracht")
    } else return prompt("Incorrect. Probeer opnieuw")

    console.log(window.alert1);
    if(window.alert1 === undefined) {
        clock.style.display = "block";
    }

}

const button = document.querySelector("#button-2");
button.addEventListener("click", task1);

const task2 = function () {
    const box = prompt("Voer het password hier in");
    const parsed = box.toUpperCase();
    if (parsed == "FIBONACCI") {
        const alert1 = alert("Correct! Klick voor de volgende opdracht")
    } else return prompt("Incorrect. Probeer opnieuw")

    console.log(window.alert1);
    // if (window.alert1 === undefined) {
    //     clock.style.display = "block";
    // }

}

const button2 = document.querySelector("#button-3");
button2.addEventListener("click", task2)