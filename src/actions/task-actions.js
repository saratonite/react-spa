import db from '../database';

let projectRef = db.ref("bucket");

export function fetchTaskList(projectId){

  console.log("actions:task.fetchTaskList",projectId)
  let projectTasks = projectRef.child(projectId + "/tasks")
  return dispatch => {

    projectTasks.on("value",snapshot => {

      console.log("DATA::",snapshot.val())

      dispatch({type:"FETCH_TASK_LIST",payload:snapshot.val()})

    })


  }

}

export function createTask(projectId,task){

  let projectTasks = projectRef.child(projectId + "/tasks")

  return dispatch => {
    projectTasks.push(task,function(){
      dispatch({type:"TASK_CREATED",payload:true})
    });

  }

}
