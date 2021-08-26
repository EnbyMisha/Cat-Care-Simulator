class Cat {
    constructor() {
        this.health     =   100;
        this.hunger     =   100;
        this.energy     =   100;
        this.enjoyment  =   100;
        this.hygiene    =   100;
        this.alive = true;
        this.canSeeVet = true;
        this.age = 1;
    }

    eat(food) {
        switch(food.type) {
            case "treat":
                this.hunger += 2;
                this.energy += 3;
                this.checkStats();
                break;
            case "expensive":
                this.hunger += 5;
                this.energy += 5;
                this.checkStats();
                break;
            case "cheap":
                this.hunger += 2;
                this.energy += 2;
                this.checkStats();
                break;
        };
    }

    sleep(hour_duration) {
        this.energy += 3*hour_duration;
        this.checkStats();
    }

    interact(action) {
        switch(action) {
            case "laser-pen":
                this.enjoyment += 5;
                this.energy -= 2;
                this.checkStats();
                break;
            case "bath":
                this.hygiene += 20;
                this.enjoyment -= 10;
                this.energy -= 5;
                this.checkStats();
                break;
            case "walk": 
                this.enjoyment += 15;
                this.hygiene -= 5;
                this.energy -= 10;
                this.checkStats();
                break;
            case "vet":
                this.enjoyment += 2;
                this.health += 30;
                this.energy += 30;
                this.hunger += 40;
                this.hygiene += 40;
                this.checkStats();
                break;
        }
    }

    checkStats() {
        if(this.health > 100)       this.health     =   100;
        if(this.hunger > 100)       this.hunger     =   100;
        if(this.hygiene > 100)      this.hygiene    =   100;
        if(this.energy > 100)       this.energy     =   100;
        if(this.enjoyment > 100)    this.enjoyment  =   100;

        if(this.health <= 0)       {
            this.health = 0;
            this.alive = false;
        };
        if(this.hunger <= 0)       {
            this.hunger = 0;
            this.alive = false;
        };
        if(this.hygiene <= 0)      {
            this.hygiene = 0;
        };
        if(this.energy <= 0)       {
            this.energy = 0;
            this.alive = false;
        };
        if(this.enjoyment <= 0)      {
            this.enjoyment = 0;
        };
    }

    decay() {
        this.energy -= 2;
        this.hunger -= 4;
        this.hygiene -= 5;
        this.enjoyment -= 5;

        if(this.enjoyment < 60) this.energy -= 5;

        if(this.energy < 50) {
            if(this.energy <= 0) {
                this.health -= 4;
            }else {
                this.health -= 2;
            };
        };
        if(this.hunger < 50) this.health -= 4;
        if(this.hygiene < 70) {
            if(this.hygiene <= 0) {
                this.health -= 12;
            }else {
                this.health -= 6;
            };
        };

        this.checkStats();
    }
}






function DisplayMainWindow(Tobi) {
    const maincontainer = document.getElementById("main-container");
    maincontainer.innerHTML = (
        `
        <h1>Cat Care Simulator</h1>
        <div class="sub-container" id="game-container">
            <h1 id="sub-c-title">Tobi</h1>
            <ul>
                <li>Health: ${Tobi.health}</li>
                <li>Hunger: ${Tobi.hunger}</li>
                <li>Hygiene: ${Tobi.hygiene}</li>
                <li>Energy: ${Tobi.energy}</li>
                <li>Enjoyment: ${Tobi.enjoyment}</li>
            </ul>
        </div>
        <div class="btn-grid", id="main-btn-grid">
            <button id="feed-btn" class="btn">Feed</button>
            <button id="sleep-btn" class="btn">Sleep</button>
            <button id="interact-btn" class="btn">Interact</button>
        </div>
        `
    );

    return "mainwin";
};



function DisplayFeedWindow(Tobi) {
    const maincontainer = document.getElementById("main-container");
    maincontainer.innerHTML = (
        `
        <h1>Cat Care Simulator</h1>
        <div class="sub-container" id="game-container">
            <h1 id="sub-c-title">Tobi</h1>
            <ul>
                <li>Health: ${Tobi.health}</li>
                <li>Hunger: ${Tobi.hunger}</li>
                <li>Hygiene: ${Tobi.hygiene}</li>
                <li>Energy: ${Tobi.energy}</li>
                <li>Enjoyment: ${Tobi.enjoyment}</li>
            </ul>
        </div>
        <div class="btn-grid", id="main-btn-grid">
            <button id="snack-btn" class="btn">Feed Snack</button>
            <button id="cheap-btn" class="btn">Cheap food</button>
            <button id="expensive-btn" class="btn">Expensive food</button>
            <button id="back-btn" class="btn">Back</button>
        </div>
        `
    );

    return "feedwin";
};



function DisplaySleepWindow(Tobi) {
    const maincontainer = document.getElementById("main-container");
    maincontainer.innerHTML = (
        `
        <h1>Cat Care Simulator</h1>
        <div class="sub-container" id="game-container">
            <h1 id="sub-c-title">Tobi</h1>
            <ul>
                <li>Health: ${Tobi.health}</li>
                <li>Hunger: ${Tobi.hunger}</li>
                <li>Hygiene: ${Tobi.hygiene}</li>
                <li>Energy: ${Tobi.energy}</li>
                <li>Enjoyment: ${Tobi.enjoyment}</li>
            </ul>
        </div>
        <div class="btn-grid", id="main-btn-grid">
            <button id="minor-btn" class="btn">4 Hours</button>
            <button id="adequate-btn" class="btn">6 Hours</button>
            <button id="normal-btn" class="btn">8 Hours</button>
            <button id="back-btn" class="btn">Back</button>
        </div>
        `
    );

    return "sleepwin";
};



function DisplayInteractWindow(Tobi) {
    const maincontainer = document.getElementById("main-container");
    maincontainer.innerHTML = (
        `
        <h1>Cat Care Simulator</h1>
        <div class="sub-container" id="game-container">
            <h1 id="sub-c-title">Tobi</h1>
            <ul>
                <li>Health: ${Tobi.health}</li>
                <li>Hunger: ${Tobi.hunger}</li>
                <li>Hygiene: ${Tobi.hygiene}</li>
                <li>Energy: ${Tobi.energy}</li>
                <li>Enjoyment: ${Tobi.enjoyment}</li>
            </ul>
        </div>
        <div class="btn-grid", id="main-btn-grid">
            <button id="laser-pen-btn" class="btn">Laser Pen</button>
            <button id="bath-btn" class="btn">Bath</button>
            <button id="walk-btn" class="btn">Walk</button>
            <button id="vet-btn" class="btn">Visit Vet</button>
            <button id="back-btn" class="btn">Back</button>
        </div>
        `
    );

    return "interactwin";
};



function DisplayFailWindow(Tobi) {
    const maincontainer = document.getElementById("main-container");
    maincontainer.innerHTML = (
        `
        <h1>Cat Care Simulator</h1>
        <div class="sub-container" id="game-container">
            <h1 id="sub-c-title">Died At Age ${Tobi.age}</h1>
            <h3>Tobi is dead, and it's all because of you</h3>
            <h3>But you already know that, you sick monster</h3>
            <h3>Now suffer with the guilt and shame</h3>
        </div>
        <div class="btn-grid", id="main-btn-grid">
            <button id="reload-btn" class="btn">Restart</button>
        </div>
        `
    );

    document.body.style.animationPlayState = "paused";

    return "failwin";
};





export {Cat, DisplayMainWindow, DisplayFeedWindow, DisplaySleepWindow, DisplayInteractWindow, DisplayFailWindow};