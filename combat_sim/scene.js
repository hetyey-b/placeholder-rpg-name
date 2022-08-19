class Scene {
    constructor(party, enemies) {
        this.party = party
        this.enemies = enemies
        this.inits = {}
        for (const char of this.party) {
            this.inits[char] = 0
        }
        for (const enemy of this.enemies) {
            this.inits[enemy] = 0
        }
    }
}

module.exports = Scene