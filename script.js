//QUERY SELECTORS

const atkBtn0 = document.querySelector("#atk0-btn",)
const ultAtkBtn0 = document.querySelector("#ultatk0-btn")
const atkBtn1 = document.querySelector("#atk1-btn",)
const ultAtkBtn1 = document.querySelector("#ultatk1-btn")
const notifycats = document.querySelector("#battle-text-cats")
const notifydogs = document.querySelector("#battle-text-dogs")
const barkleyimg = document.querySelector("barkley")
const purrcivaltxt = document.querySelector("#purrcival-text")
const barktholomewtxt = document.querySelector("#barktholomew-text")
const clawdiatxt = document.querySelector("#clawdia-text")
const barkleytxt = document.querySelector("#barkley-text")
const notifytxt = document.querySelector("#notify-text")

// EVENT LISTENERS
function attachListeners() {
    atkBtn0.addEventListener("click", purrcivalTurn1, false)
    ultAtkBtn0.addEventListener("click", purrcivalTurn2, false)
    atkBtn1.addEventListener("click", clawdiaTurn1, false)
    ultAtkBtn1.addEventListener("click", clawdiaTurn2, false)
    // switchBtn.addEventListener("click", combatSelect, false)
    // startBtn.addEventListener("click")
}

//======================= CATS =======================

//   PURRCIVAL OBJECTS

let purrcival = {
    attackFirst: true,
    numskills: 2,
    skills: [["PURR", 5], ["PURRcolator", 10]],
    name: "Purrcival",
    health: 50,
    speed: Math.random() * (.8 - .6) + (.6),
    greeting: "Purrcival has entered the battle field PURRing manically!"
}

// CLAWDIA OBJECTS
let clawdia = {
    attackFirst: true,
    numskills: 2,
    skills: [["Scratch", 5], ["Claw", 10]],
    name: "Clawdia",
    health: 50,
    speed: Math.random() * (.8 - .6) + (.6),
    greeting: "Clawdia has scrached and clawed her way to the battle field!"
}

//======================= DOGS =======================

// BARKTHOLOMEW OBJECT

let barktholomew = {
    attackFirst: false,
    numskills: 2,
    skills: [["Bite", 5], ["Maul", 10]],
    name: "Barktholomew",
    health: 50,
    speed: Math.random() * (.8 - .6) + (.6),
    greeting: "Barktholomew has entered the battle ready to maul all opponents"
}

//BARKELEY OBJECT

let barkley = {
    attackFirst: false,
    numskills: 2,
    skills: [["BARK", 5], ["HOWL", 10]],
    name: "Barkley",
    health: 50,
    speed: Math.random() * (.8 - .6) + (.6),
    greeting: "Barkley has entered the battle field howling uncontrollably!"
}

//======================= BATTLE =======================

//CALCULATIONS

//DAMAGE CALCULATION
function calcDamage(max, min) {
    return Math.random() * (max - min) + min
}
//number of skills that current cat can execute, randomly selects skill
function calcCatMove(name) {
    let skillcount = name.numskills;
    return Math.ceil(calcDamage(skillcount + 1, 1)) - 1;
}
//number of skills that current dog can execute, randomly selects skill
function calcDogMove(name) {
    let skillcount = name.numskills;
    return Math.ceil(calcDamage(skillcount + 1, 1)) - 1;
}

//======================= PURRCIVAL BATTLE =======================
let hasFainted = true
function purrcivalTurn1() {

    if (faintedBarktholomew0(purrcival.health, barktholomew.health) === false && hasFainted === true)
        if (winCondition() === false && hasFainted === true) {

            let purrcivalSkill = calcCatMove(purrcival)
            let purrcivalDamage = calcDamage(purrcival.skills[purrcivalSkill][1], 1)
            let purrcivalDamageDealt = Math.ceil(purrcivalDamage)
            barktholomew.health = barktholomew.health - purrcivalDamageDealt
            hasFainted === true
            notifycats.value = `${purrcival.name} used "${(purrcival.skills[purrcivalSkill][0])}" ${barktholomew.name} has been dealt ${purrcivalDamageDealt} damage!, ${barktholomew.name} has ${barktholomew.health} health remaining!`
            notifytxt.value ="Purrcival turnes his attention towards Bartholomew."

            let barktholomewSkill = calcDogMove(barktholomew)
            let barktholomewDamage = calcDamage(barktholomew.skills[barktholomewSkill][1], 1)
            let barktholomewDamageDealt = Math.ceil(barktholomewDamage)
            purrcival.health = purrcival.health - barktholomewDamageDealt
            notifydogs.value = `${barktholomew.name} used "${(barktholomew.skills[barktholomewSkill][0])}" ${purrcival.name} has been dealt ${barktholomewDamageDealt} damage!, ${purrcival.name} has ${purrcival.health} health remaining!`
        }
}

function purrcivalTurn2() {
    if (winCondition() === false && hasFainted === true)
        if (faintedBarkley0(purrcival.health, barkley.health) === false && hasFainted === true) {

            let purrcivalSkill = calcCatMove(purrcival)
            let purrcivalDamage = calcDamage(purrcival.skills[purrcivalSkill][1], 1)
            let purrcivalDamageDealt = Math.ceil(purrcivalDamage)
            barkley.health = barkley.health - purrcivalDamageDealt
            notifycats.value = (`${purrcival.name} used "${(purrcival.skills[purrcivalSkill][0])}" ${barkley.name} has been dealt ${purrcivalDamageDealt} damage!, ${barkley.name} has ${barkley.health} health remaining!`)
            notifytxt.value = "Purrcival turnes his attention towards Barkley."
            hasFainted === true

            let barkleySkill = calcDogMove(barkley)
            let barkleyDamage = calcDamage(barkley.skills[barkleySkill][1], 1)
            let barkleyDamageDealt = Math.ceil(barkleyDamage)
            purrcival.health = purrcival.health - barkleyDamageDealt
            notifydogs.value = (`${barkley.name} used ${(barkley.skills[barkleySkill][0])}  ${purrcival.name} has been dealt ${barkleyDamageDealt} damage!, ${purrcival.name} has ${purrcival.health} health remaining!`)
            hasFainted === true
        }
}

//======================= CLAWDIA BATTLE =======================

function clawdiaTurn1() {
    if (winCondition() === false && hasFainted === true)
        if (faintedBarktholomew1(clawdia.health, barktholomew.health) === false && hasFainted === true) {

            let clawdiaSkill = calcCatMove(clawdia)
            let clawdiaDamage = calcDamage(clawdia.skills[clawdiaSkill][1], 1)
            let clawdiaDamageDealt = Math.ceil(clawdiaDamage)
            barktholomew.health = barktholomew.health - clawdiaDamageDealt
            notifycats.value = (`${clawdia.name} used "${(clawdia.skills[clawdiaSkill][0])}"  ${barktholomew.name} has been dealt ${clawdiaDamageDealt} damage!, ${barktholomew.name} has ${barktholomew.health} health remaining!`)
            notifytxt.value = "Clawdia turnes her attention towards Barktholomew."
            hasFainted === true


            let barktholomewSkill = calcDogMove(barktholomew)
            let barktholomewDamage = calcDamage(barktholomew.skills[barktholomewSkill][1], 1)
            let barktholomewDamageDealt = Math.ceil(barktholomewDamage)
            clawdia.health = clawdia.health - barktholomewDamageDealt
            notifydogs.value = (`${barktholomew.name} used ${(barktholomew.skills[barktholomewSkill][0])}    ${clawdia.name} has been dealt ${barktholomewDamageDealt} damage!, ${clawdia.name} has ${clawdia.health} health remaining!`)
            hasFainted === true
        }
}

function clawdiaTurn2() {
    if (winCondition() === false && hasFainted === true)
        if (faintedBarkley1(clawdia.health, barkley.health) === false && hasFainted === true) {

            let clawdiaSkill = calcCatMove(clawdia)
            let clawdiaDamage = calcDamage(clawdia.skills[clawdiaSkill][1], 1)
            let clawdiaDamageDealt = Math.ceil(clawdiaDamage)
            barkley.health = barkley.health - clawdiaDamageDealt
            notifycats.value = (`${clawdia.name} used "${(clawdia.skills[clawdiaSkill][0])}" ${barkley.name} has been dealt ${clawdiaDamageDealt} damage!, ${barkley.name} has ${barkley.health} health remaining!`)
            notifytxt.value = "Clawdia turnes her attention towards Barkley."
            hasFainted === true

            let barkleySkill = calcDogMove(barkley)
            let barkleyDamage = calcDamage(barkley.skills[barkleySkill][1], 1)
            let barkleyDamageDealt = Math.ceil(barkleyDamage)
            clawdia.health = clawdia.health - barkleyDamageDealt
            notifydogs.value = (`${barkley.name} used ${(barkley.skills[barkleySkill][0])} ${clawdia.name} has been dealt ${barkleyDamageDealt} damage!, ${clawdia.name} has ${clawdia.health} health remaining!`)
            hasFainted === true
        }
}

//======================= CONDITIONALS =======================

function faintedBarktholomew0(catHealth, dogHealth) {
    if (catHealth <= 0) {
        notifycats.value = ("Purrcival has fainted")
        return true
    }
    else if (dogHealth <= 0) {
        notifydogs.value = ("Barktholomew has fainted")
        return true
    }
    return false
}
function faintedBarkley0(catHealth, dogHealth) {
    if (catHealth <= 0) {
        notifycats.value = ("Purrcival has fainted")
        return true
    }
    else if (dogHealth <= 0) {
        notifydogs.value = ("Barkley has fainted")
        return true
    }
    return false
}

function faintedBarktholomew1(catHealth, dogHealth) {
    if (catHealth <= 0) {
        notifycats.value = ("Clawdia has fainted")
        return true
    }
    else if (dogHealth <= 0) {
        notifydogs.value = ("Barktholomew has fainted")
        return true
    }
    return false
}
function faintedBarkley1(catHealth, dogHealth) {
    if (catHealth <= 0) {
        notifycats.value = ("Clawdia has fainted")
        return true
    }
    else if (dogHealth <= 0) {
        notifydogs.value = ("Barkley has fainted")
        return true
    }
    return false
}



function winCondition() {
    if (purrcival.health <= 0 && clawdia.health <= 0) {
        notifytxt.value = (`Dogs win`)
        return true
    } else if (barkley.health <= 0 && barktholomew.health <= 0) {
        notifytxt.value =  (`Cats win!`)
        return true
    }
    return false
}

purrcivaltxt.value = 'Purrcival'
barktholomewtxt.value = "Barktholomew"
clawdiatxt.value = "Clawdia"
barkleytxt.value = "Barkley"

console.log(purrcival.greeting)
console.log(clawdia.greeting)
console.log(barktholomew.greeting)
console.log(barkley.greeting)

attachListeners()
