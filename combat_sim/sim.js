const { D } = require('./utils.js');

const { actions } = require("./dataLoader.js")
const Stats = require("./stats.js")
const Weapon = require("./weapon.js")
const Character = require('./character.js');
const Scene = require('./scene.js');

function log(obj) {
    console.log(JSON.stringify(obj, null, 2))
}


const playerStats = new Stats(2, 2)
const dagger = new Weapon("dagger", 1, "1d4", 1)
const player = new Character(actions, playerStats, dagger, 10)
const scene = new Scene([player], [])

const enemyStats = new Stats(1, 1)
const enemy = new Character([], enemyStats, null, 10)

player.setTarget(enemy)

function doAction(scene, action, self) {
    if (eval(action.condition)) {
        console.log("action done");
        eval(action.effect)
    }
    else {
        console.log("action not done");
    }
}

doAction(scene, player.actions.gain_initiative, player)
doAction(scene, player.actions.melee_attack, player)

log(player)
log(enemy)