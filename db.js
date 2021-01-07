// Database
const pg = require('pg');
const { response } = require('express');
let pool = new pg.Pool({
    database: 'project_manager',
    username: 'kien',
    password: 'test'
})

// Making request to the Database
function run_sql(sql,values = [], cb){
    pool.query(sql, values, (err, response) => {
        cb(response)
    })
}


module.exports = run_sql