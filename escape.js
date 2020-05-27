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
    if (window.alert1 === undefined) {
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
    if (window.alert1 === undefined) {
        // hidden.style.display = "block";
        // document.querySelector('html').style.backgroundImage = "url(https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860_fireworks_banner_4MB.gif)"
        document.querySelector('html').style.backgroundImage = "url(https://s1.1zoom.me/b5050/257/Fireworks_523615_1920x1080.jpg)";
        document.querySelector('header').style.display = "none";

    }

}

const button2 = document.querySelector("#button-3");
button2.addEventListener("click", task2);


const hidden = document.querySelector('#hide');
hidden.style.display = "none";
