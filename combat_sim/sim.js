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
const player = new Character("Player", actions, playerStats, dagger, 10)

const enemyStats = new Stats(1, 1)
const enemy = new Character("Enemy", actions, enemyStats, null, 10)

const scene = new Scene([player], [enemy])

player.setTarget(enemy)

function getPossibleActions(scene, self) {
    const scope = {}
    return Object.values(self.actions).filter((v, i, a) => eval(v.condition))
}

function doAction(scene, action, self) {
    const scope = {}
    if (eval(action.condition)) {
        scene.inits[self] -= action.cost
        for (const effect of action.effects) {
            eval(effect)
        }
    }
    else {
        console.log(self.name + " conditions failed on " + action.name)
    }
    console.log("")
}

log(scene)
// log(getPossibleActions(scene, player))

doAction(scene, player.actions.gain_initiative, player)
// log(getPossibleActions(scene, player))

doAction(scene, player.actions.melee_attack, player)

doAction(scene, player.actions.melee_attack, player)

doAction(scene, player.actions.melee_attack, player)
