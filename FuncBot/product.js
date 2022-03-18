//CREATE BY MANIK

const fs = require('fs-extra');
const _dir = JSON.parse(fs.readFileSync('./database/product.json'))

const addProdUser = (userId, time, produk, _dir) => {
    const obj = { id: userId, time: 0, produk: produk }
    _dir.push(obj)
    fs.writeFileSync('./database/product.json', JSON.stringify(_dir));
}


const checkProdUser = (userId, _dir) => {
    let status = false;
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true;
        }
    })
    return status
}

const getProdReason = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].produk
    }
}


const getProdTime = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].time
    }
}


const getProdId = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
}


const getProdPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    return position
}

module.exports = {
    addProdUser,
    checkProdUser,
    getProdReason,
    getProdTime,
    getProdId,
    getProdPosition
}