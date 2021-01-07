const express = require('express')
const router = express.Router()
const run_sql = require('../db')
const bcrypt = require('bcrypt')



// creating a hashed password using bcrypt
const generateHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)


// Sign up page
router.get('/register', function(req,res){
    res.render('register')
})

// Creating a new user in users table in a database called project_manager
router.post('/register', (request, response) => {
    const username = request.body.username
    // console.log(request.body)
    const email = request.body.email
    const password = request.body.password
    const password_digest = generateHash(password)
    run_sql('INSERT INTO users(username,email,password_digest) VALUES($1, $2, $3)', [username, email, password_digest], db_res => {
        response.redirect('/')
    })
})

module.exports = router