# Basic Combat Rules

## Combat design philosophy basics
* We use grid based combat, where one tile represents a 1,5m x 1,5m square.
* Combat should be made as quick as possible.
* Most features of combat should encourage comboing with other players.

## Terminology
* Minion: Minor combatant, low level henchman. Doesn't do much damage, and dies easily.
* General: A named enemy, nearly as tough as player characters.
* Boss: A very powerful enemy, at least as tough as player characters, but probably more so.

## Combat basics
* Combat is made of rounds
* Initiative is something like 4 + 1d4
* The creature with the highest initiative acts
* When it's your turn:
    * Move some for free
    * Free action
    * Spend one action point on something
        * Attack
        * Add a component to spells (see later)
* For possible actions, we should use an action card system:
    * Melee Weapon Attack   - 1 Action point    - Trigger: creature leaves your space
    * Ranged Weapon Attack  - 1 Action point    - Trigger: none
    * Mage Slayer           - 1 Action point    - Trigger: creature in range adds a component to a spell    - make an attack against that creature
    * Magick                - 1 Action point    - Trigger: none                                             - Add one component to current spell, and - optionally - cast it
    * Intercept             - 1 Action point    - Trigger: a weapon attack is made by a creature in range   - Reduce dmg by some math
    * Assist attack         - 1 Action point    - Trigger: a weapon attack is made by a creature in range   - Increase dmg by some math
* Each action card can be cast:
    * If it is your turn
    * If the trigger condition is fulfilled
    * Either way, it costs 1 Action point

# Spell basics
* There are 4 elements: fire, water, earth, wind
* Players need to use a component of one of the elements, and add it to a spell as an action
* Whenever adding an element, they can also cast it
* If they take damage, while they have a spell "in progress", they have to make some sort of concentration check, or the spell misfires
* IDEA: the misfire damage is still based on how many spell components are added, so the bigger your spell, the more it hurts, if it goes wrong
    * This probably means a stronger then linear progression in relation to # of components, with some sort of a cap on component #