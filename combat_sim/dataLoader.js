const fs = require('fs');

const actions = JSON.parse(fs.readFileSync('actions.json'));

module.exports = { actions }
