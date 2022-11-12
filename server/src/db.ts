const { Client, Pool } = require('pg')

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    port: 5432,
    database: "todoapp"
})
// const db = client.connect({
//     user: "postgres",
//     host: "localhost",
//     port: 5432,
//     database: "todoapp"
// })

module.exports = pool