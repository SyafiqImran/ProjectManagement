const express = require('express')
const router = express.Router()
const run_sql = require('../db')
const bcrypt = require('bcrypt')

// method for authentication (need bcrypted password to access)
const validPassword = (plainTextPassword, passwordHash) => bcrypt.compareSync(plainTextPassword, passwordHash)
// bcrypt.compareSync = avoid timing attacks for security reasons.

router.get('/', function(req,res){
    res.render('signin')
})


// logging a user in
router.post('/login', (request, response) => {
    const email = request.body.email
    // console.log(email)
    const password = request.body.password
    // console.log(password)
    run_sql('SELECT * FROM users WHERE email = $1', [email], db_response => {
        if (db_response.rows.length == 0){
            response.redirect('/')
        } else {
            const user = db_response.rows[0]
            // Output db_response.rows[0]
            // {
            //     id: 1,
            //     username: 'hehe',
            //     email: 'hehe@gmail.com',
            //     password_digest: '123'
            // }
            if (validPassword(password, user.password_digest)) {
                // will get false because of bcrypt line
                request.session.userId = user.id 
                request.session.userName = user.username
                response.redirect('/mainpage')
            } else {
                response.redirect('/')
            }
        }
    })
})

// Logging a user out
router.delete('/logout', (request, response) => {
    request.session.userId = undefined
    request.session.destroy();
    response.redirect('/')
})

module.exports = router