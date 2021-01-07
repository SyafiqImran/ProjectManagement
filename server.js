const express = require('express')
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const session = require('express-session')
const methodOverride = require('method-override')


// Database
const run_sql = require('./db')

// controllers
const mainPageRoutes = require('./controllers/mainpage')
const userRoutes = require('./controllers/users')
const sessionRoutes = require('./controllers/sessions')
const personalPageRoutes = require('./controllers/personalpage');
const taskPageRoutes = require('./controllers/task');
const { response } = require('express');


let app = express()
const port = 3001

app.set('view engine', 'ejs')

app.use(express.static('public'))

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// enabling sessions

app.use(session({
    key: 'user_sid',
    secret: process.env['EXPRESS_SESSION_SECRET_KEY'], 
    // express_session_secret_key can be anything jumble of letters and numbers (minimum length = +40 characters)
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }

}))

// allow Patch and Delete

app.use(methodOverride('_method')) //for log out


// API for users (untuk cukup syarat project)
app.get('/api/project_management/users', (request, response) => {
    run_sql('SELECT * FROM users', [], db_response => {
        response.json(db_response.rows)
    })
})

// Send as API for progress bar
app.get('/api/project_management/filter_completed_task', (request, response) => {
    run_sql('SELECT * FROM tasks ORDER BY id', [], db_response => {
        var tasks = db_response.rows
        var completed_tasks = tasks.filter(function(task){
            return task.complete
        })
        response.json(completed_tasks)
    })
})
app.get('/api/project_management/all_task', (request, response) => {
    run_sql('SELECT * FROM tasks ORDER BY id', [], db_response => {
        var tasks = db_response.rows
        response.json(tasks)
    })
})


// ROUTES
app.use(mainPageRoutes)
app.use(userRoutes)
app.use(sessionRoutes)
app.use(personalPageRoutes)
app.use(taskPageRoutes)




app.listen(port, function(){
    console.log(`listen to port ${port}`)
})