import { traits } from "./traits.js";

let inputs = {
    //keys for input values
    name: null,
    race: null,
    age: null,
    profession: null,
    home: null,
    temperament: null,
    alignment: null,
    bond: null,
    ideal: null,
    flaw: null,
    //array of unfilled values
    blanks: [],          
    canoe: [],   

    //read values from html form and 
    assign() {
        this.blanks.length = 0;                 
        for (let property in inputs) {
            if (document.getElementById(property + 'Input').value) {
                this[property] = document.getElementById(property + 'Input').value;
            } else {
                this.blanks.push(property);
            }
            if (property === 'alignment') {
                this.assess();
                console.log(inputs);
                break;
            };
        }
    },

    assess() {
        this.setRace();
        this.setAge();
        this.setHome();
        this.setProfession();
        this.setTemper();
        this.setAlignment();
        output();
    },

    setRace() {
            //creates key 'usedRace' to store index of chosen race for further calculations
        if (this.blanks.includes("race")) {         //
            this.usedRace = Math.floor(Math.random() * (traits.race.length - 1));
            this.race = traits.race[this.usedRace][0];
            console.log(`assigned race is ${this.race}`);
        } else if (traits.race.flat().includes(this.race)) {       //if user provides SRD race
            this.usedRace = traits.race.flat().indexOf(this.race);
            if (this.usedRace != 0) {
                this.usedRace /= 3;
            }
            console.log(`user chose ${this.race} at index ${this.usedRace}`);
        } else {
            this.usedRace = 7;       //if user provides custom race, use human data
            console.log(`user chose a custom race called ${this.race}`);
        }
    },

    setAge() {
        if (randomAgeCheck) {
            this.age = Math.floor(Math.random() * 100);
            document.getElementById("ageInput").value = this.age;
        }
        this.age = Math.floor(this.age * ((traits.race[this.usedRace][2] - traits.race[this.usedRace][1]) / 100) + traits.race[this.usedRace][1]);     //assigns age based on race
        console.log(`assigned age is ${this.age}`);
    },

    setHome() {
        if (this.blanks.includes("home")) {
            this.home = traits.home[Math.floor(Math.random() * traits.home.length)];
        }
    },

    setProfession() {
        if (this.blanks.includes("profession")) {
            this.profession = traits.profession[Math.floor(Math.random() * traits.profession.length)];
        }
    },

    setTemper() {
        this.canoe.length = 0;      //reset canoe array        

        for (let i = 0; i < 5; i++) {
            this.canoe.push(Math.floor(Math.random() * 4));     //fill canoe array
        }
        console.log(`CANOE results are ${this.canoe}`);

        const orderedCanoe = [];

        for (let i = 3; i >= 0; i--) {
            for (let j = 0; j < this.canoe.length; j++) {       //sort canoe highest to lowest into orderedCanoe
                if (this.canoe[j] === i) {
                    orderedCanoe.push(j);
                }
            }
        }

        this.temperament = personalityTest(orderedCanoe[0], orderedCanoe[1]) + ', ';
        this.temperament += personalityTest(orderedCanoe[3], orderedCanoe[4]) + ', ';
        this.temperament += personalityTest(orderedCanoe[2], orderedCanoe[Math.floor(Math.random() * 5)]) + '.';
    },

    setAlignment() {
        this.alignment = traits.alignment[0][Math.floor(Math.random() * 3)] + " " + traits.alignment[1][Math.floor(Math.random() * 3)];
        if (this.alignment === "neutral neutral") {
            this.alignment = "neutral";
        }
    }

}

let randomAgeCheck = false;

function personalityTest (adj1, adj2) {
    if (adj1 > 1 && adj2 > 1) { //if both "positive"
        return traits.temper[0][adj1][adj2];
    } else if (adj1 < 2 && adj2 < 2) { //if both "negative"
        return traits.temper[3][adj1][adj2];
    } else if (Math.abs(adj1 - 3) === adj2 || Math.abs(adj2 - 3) === adj1) { //one pos one neg, same magnitude
        return traits.temper[1][adj1][adj2] + ', ' + traits.temper[2][adj1][adj2];
    } else if (Math.abs(adj1 - 3) > adj2 || Math.abs(adj2 - 3) > adj1) { //one pos one neg, emphasis on negative
        return traits.temper[2][adj1][adj2];
    } else { //should only be one pos one neg, emphasis on pos left
        return traits.temper[1][adj1][adj2];
    }  



}

function output() {
    console.log('I output the results!');
    document.getElementById("textOutput").innerHTML = `${inputs.name} is a ${inputs.age} year old ${inputs.race} ${inputs.profession}.  
                                                        They hail from a ${inputs.home}, and tend toward a ${inputs.alignment} alignment.
                                                        Their major personality traits include ${inputs.temperament}`;
}

document.getElementById('generate').onclick = () => {
    inputs.assign();
}

document.getElementById('randomizeAge').onclick = () => {
    randomAgeCheck = !randomAgeCheck;
}