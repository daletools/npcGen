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
        if (document.getElementById("randomizeAge")) {
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
        this.orderedCanoe.length = 0;

        for (let i = 0; i < 5; i++) {
            this.canoe.push(Math.floor(Math.random() * 4));     //fill canoe array
        }
        console.log(`CANOE results are ${this.canoe}`);

        let tempMax = this.canoe.indexOf(Math.max(...this.canoe));
        const orderedCanoe = this.canoe.map();

        for (i = 0; i < 4; i++) {

            let diff;
            this.temperament += traits.temper[this.canoe[i]][diff][canoe] + ", ";
        }
    },

    setAlignment() {
        this.alignment = traits.alignment[0][Math.floor(Math.random() * 3)] + " " + traits.alignment[1][Math.floor(Math.random() * 3)]
    }

}

function output() {
    console.log('I output the results!');
    document.getElementById("textOutput").innerHTML = `${inputs.name} is a ${inputs.age} year old ${inputs.race} ${inputs.profession}.  
                                                        They hail from a ${inputs.home}, and tend toward a ${inputs.alignment} alignment.`;
}

document.getElementById('generate').onclick = () => {
    inputs.assign();
}
