import {Cat, DisplayMainWindow, DisplayFeedWindow, DisplaySleepWindow, DisplayInteractWindow, DisplayFailWindow} from "./util.js";



// init declarations
let Tobi = new Cat();
localStorage.currentWin = DisplayMainWindow(Tobi);



// timer based events
const statdecay = setInterval(() => {
    Tobi.decay();
    if(!Tobi.alive) {
        clearInterval(statdecay);
        clearInterval(timeProgression);
        localStorage.currentWin = DisplayFailWindow(Tobi);
    }
}, 20000);

const timeProgression = setInterval(() => Tobi.age++, 180000);

const updateWin = setInterval(function() {
    if(localStorage.currentWin == "mainwin") {
        localStorage.currentWin = DisplayMainWindow(Tobi);
        const feedbtn           =       document.getElementById("feed-btn");
        const sleepbtn          =       document.getElementById("sleep-btn");
        const interactbtn       =       document.getElementById("interact-btn");
        feedbtn.addEventListener("click", () => {localStorage.currentWin = DisplayFeedWindow(Tobi)});
        sleepbtn.addEventListener("click", () => {localStorage.currentWin = DisplaySleepWindow(Tobi)});
        interactbtn.addEventListener("click", () => {localStorage.currentWin = DisplayInteractWindow(Tobi)});
    };
    if(localStorage.currentWin == "feedwin") {
        localStorage.currentWin = DisplayFeedWindow(Tobi);
        const snackbtn          =       document.getElementById("snack-btn");
        const cheapbtn          =       document.getElementById("cheap-btn");
        const expensivebtn      =       document.getElementById("expensive-btn");
        const backbtn           =       document.getElementById("back-btn");

        snackbtn.addEventListener("click", () => {
            const food = {type:"snack"};
            Tobi.eat(food);
        });

        cheapbtn.addEventListener("click", () => {
            const food = {type:"cheap"};
            Tobi.eat(food);
        });

        expensivebtn.addEventListener("click", () => {
            const food = {type:"expensive"};
            Tobi.eat(food);
        });

        backbtn.addEventListener("click", () => {
            localStorage.currentWin = DisplayMainWindow(Tobi);
        });
    };
    if(localStorage.currentWin == "sleepwin") {
        localStorage.currentWin = DisplaySleepWindow(Tobi);
        const minorbtn          =       document.getElementById("minor-btn");
        const adequatebtn       =       document.getElementById("adequate-btn");
        const normalbtn         =       document.getElementById("normal-btn");
        const backbtn           =       document.getElementById("back-btn");

        minorbtn.addEventListener("click", () => {
            Tobi.sleep(4);
        });

        adequatebtn.addEventListener("click", () => {
            Tobi.sleep(6);
        });

        normalbtn.addEventListener("click", () => {
            Tobi.sleep(8);
        });

        backbtn.addEventListener("click", () => {
            localStorage.currentWin = DisplayMainWindow(Tobi);
        });
    };
    if(localStorage.currentWin == "interactwin") {
        localStorage.currentWin = DisplayInteractWindow(Tobi);
        const laserpenbtn          =       document.getElementById("laser-pen-btn");
        const bathbtn              =       document.getElementById("bath-btn");
        const walkbtn              =       document.getElementById("walk-btn");
        const vetbtn               =       document.getElementById("vet-btn");
        const backbtn              =       document.getElementById("back-btn");

        laserpenbtn.addEventListener("click", () => {
            Tobi.interact("laser-pen");
        });

        bathbtn.addEventListener("click", () => {
            Tobi.interact("bath");
        });

        walkbtn.addEventListener("click", () => {
            Tobi.interact("walk");
        });

        vetbtn.addEventListener("click", () => {
            if(!Tobi.canSeeVet) return;
            alert("Vet Cooldown Started(3 Minutes)");
            Tobi.canSeeVet = false;
            Tobi.interact("vet");
            setTimeout(() => {
                Tobi.canSeeVet = true;
            }, 180000);
        });

        backbtn.addEventListener("click", () => {
            localStorage.currentWin = DisplayMainWindow(Tobi);
        });
    };
    if(localStorage.currentWin == "failwin") {
        clearInterval(updateWin);
        const reloadbtn         =           document.getElementById("reload-btn");
        reloadbtn.addEventListener("click", () => {location.reload()});
    };
}, 1000);