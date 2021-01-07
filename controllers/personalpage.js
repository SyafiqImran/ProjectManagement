const { response } = require('express')
const express = require('express')
const router = express.Router()
const run_sql = require('../db')

// User ejs file / route
router.get('/personalpage', (request, response) => {
    var userId = request.session.userId
    var userName = request.session.userName
    // console.log(request.session)

    run_sql('SELECT * FROM tasks WHERE staff_id = $1', [userId], db_response => {
        var tasks = db_response.rows
        
        response.render('user', { userId: userId, userName: userName, tasks: tasks })
    })
})

router.patch('/completed/:id', (request, response) => {
    var task_id = request.params.id
    var complete = 'true'
    var staff_id = -1
    run_sql('UPDATE tasks SET complete = $1, staff_id = $2 WHERE id = $3', [complete, staff_id, task_id], db_response => {
        response.redirect('/mainpage')
    })
})



module.exports = router