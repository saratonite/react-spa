import  Fb   from '../database';
console.info(Fb)
let db = Fb.Database;

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

export function updateTask(projectId,taskId,task) {

  let taskRef = projectRef.child(projectId + "/tasks/"+taskId)
  return dispatch => {

    taskRef.set(task)
           .then(res=>{

             dispatch({type:'TASK_UPDATED',payload:true})

           })

  }


}

/* Remove Task */
export function removeTask(projectId,taskId){


    let taskRef = projectRef.child(projectId + "/tasks/"+taskId)


    return dispatch=> {

      taskRef.remove().then(function(){

          dispatch({type:"TASK_REMOVED",payload:true})

      });

    }
}
