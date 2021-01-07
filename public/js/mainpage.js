let one = '/api/project_management/users'
let two = '/api/project_management/all_task'
let three = '/api/project_management/filter_completed_task'


const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);

var overallBar = document.querySelector(".myBar")
var width = 0;

axios
  .all([requestOne, requestTwo, requestThree])
  .then(
    axios.spread((...responses) => {
      const userData = responses[0];
      const allTask = responses[1];
      const completedTask = responses[2];

    //   console.log(userData.data)
    //   {data: Array(14), status: 200, statusText: "OK", headers: {…}, config: {…}, …}
    // Members Part API
      // use/access the results
      var membersDOM = document.querySelector('#members')
      for(let i = 0; i < userData.data.length; i++){
        var users = userData.data[i]
        membersDOM.innerHTML += `
        <h5>${users.username}</h5>
        <hr>
        `
      }
    //   All task API (for progress bar)
    //   console.log(allTask.data)
      var totalTaskNumber = allTask.data.length
      var progressBarSegments = 100 / totalTaskNumber

    //   Completed Task API 
    //   console.log(completedTask.data)
      var completedTaskArray = completedTask.data
      
    //   array datatype output..
      for(let k = 0; k < completedTaskArray.length; k++){
          if(completedTaskArray[k].complete == 'true'){
            width += progressBarSegments
            overallBar.style.width = width + "%";
            overallBar.innerHTML = width  + "%";
          }
      }

    })



  )
  .catch(errors => {
    // react on errors.
    console.error(errors);
  });


// axios
//     .get('/api/project_management/users') // make request to our own api since it is local link
//     //.then(response => console.log(response.data))
//      .then(response => response.data.forEach(users => { // after receive data 
//         var membersDOM = document.querySelector('#members')
        
        // taskDOM parent yaaaaaa 
        // membersDOM.innerHTML += `
        //     <h5>${users.email}</h5>
        //     <hr>
        // `
        
// }))

// var arrayTest = []
// axios
//     .get('/api/project_management/completed_task') // make request to our own api since it is local link
//     //.then(response => console.log(response.data))
//      .then(response => response.data.forEach(completed_tasks => { // after receive data 
//         var updateBtn = document.querySelector('#update')
//         var width = 0;
        
//         updateBtn.addEventListener('click', function(){
//         var completedTask = completed_tasks
//         // array output
        
//         arrayTest.push(completedTask)
//         console.log(arrayTest)
        
//         var percentageWorkDone = 100 / arrayTest.length 
//         // 100 / 5 = 20%
//         // kena bahagi dgn total task dalam DB
//         // 100 divide by how many number of project done 
//         console.log(percentageWorkDone)
//         var overallBar = document.querySelector(".myBar")
//         // DOM element
        
//         // Initial progress
//         // Now to add based on workdone
//         if (percentageWorkDone > 0){
//             width += percentageWorkDone
//             overallBar.style.width = width + "%";
//             overallBar.innerHTML = width  + "%";
//         }
    
//     })
        
// }))




