const { response, request } = require('express')
const express = require('express')
const router = express.Router()
const run_sql = require('../db')


router.get('/details/:id', (request, response) => {
    var task_id = request.params.id

    run_sql('SELECT * FROM tasks WHERE id = $1', [task_id], db_response =>{ 
        var task_details = db_response.rows[0]

        response.render('details', { task_id: task_id, task_details: task_details })
    })
  
})

router.patch('/edit/:task_id', (request, response) => {
    var staff_id = request.session.userId
    var task_id = request.params.task_id
    run_sql('UPDATE tasks SET staff_id = $1 WHERE id = $2', [staff_id, task_id], db_response => {
        response.redirect('/mainpage')
    })
})


router.get('/api/project_management', (request,response) => {
    run_sql('SELECT * FROM tasks', [], db_response => {
        response.json(db_response.rows)
    })
})

router.get('/moretasks', (request, response) => {
    response.render('moretask')
})

router.post('/moretasks', (request, response) => {
    const taskName = request.body.task_name
    const dueDate = request.body.due_date
    const content = request.body.content
    run_sql('INSERT INTO tasks(task_name, due_date, details) VALUES($1, $2, $3)', [taskName, dueDate, content], db_response => {
        response.redirect('/mainpage')
    })
})

module.exports = router