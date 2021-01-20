const db = require('../../data/db-config.js')

module.exports = {
    get,
    create
}

function get() {
    return db('cars')
}

function getById(id) {
    return db('cars')
        .where({ id })
        .first()
}

function create(car) {
    return db('cars')
        .insert(car)
        .then(ids => {
            return getByIds(ids[0])
        })
}