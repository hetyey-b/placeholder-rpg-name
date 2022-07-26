class Character {
    constructor(name, actions, stats, weapon, health) {
        this.name = name
        this.actions = actions
        this.stats = stats
        this.weapon = weapon
        this.health = health
        this.target = null
    }

    changeHealth(value) {
        this.health += value
    }

    setTarget(target) {
        this.target = target
    }
}

module.exports = Character
