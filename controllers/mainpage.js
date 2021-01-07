const express = require('express')
const router = express.Router()
const run_sql = require('../db')

router.get('/mainpage', (request,response) => {
    var userName = request.session.userName

    // use a filter function so that we can extract only the staff_id empty
    // return in the form of array
    
    run_sql('SELECT * FROM tasks ORDER BY id', [], db_response => {
        var tasks = db_response.rows
        var filter_task = tasks.filter(function(task){
            return !task.staff_id
        })
        
        

        response.render('mainpage', { userName: userName , filter_task: filter_task })
        
    })

    
})

module.exports = router