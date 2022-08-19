function _D(faces) {
    return Math.floor(Math.random() * faces) + 1
}

function D(desc) {
    // 1D20 or 2d6 or D20 or d12 ...
    const parts = desc.split(/[dD]+/)
    let faces = 0
    let count = 1
    switch (parts.length) {
        case 1:
            faces = parseInt(parts[0])
            break
        case 2:
            count = parseInt(parts[0])
            faces = parseInt(parts[1])
            break
        default:
            return 0
    }
    let sum = 0
    for (let i = 0; i < count; i++) {
        sum += _D(faces)
    }
    return sum
}

module.exports = { _D, D }
