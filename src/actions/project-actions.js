import  Fb   from '../database';
let db = Fb.Database;

let projectRef = db.ref("bucket");

/*
* Get list of projects , the root node
*/
export  function fetchProjects(){

  projectRef.off()

  return dispatch => {
    dispatch({type:"TOGGLE_LOADER",payload:true})
    projectRef.on('value',snapshot => {

      dispatch({type:"FETCH_PROJECTS",payload:snapshot.val()});
      dispatch({type:"TOGGLE_LOADER",payload:false})
    })
  }

}

/*
* Get single project details
*/

export function fetchProject(id){

  projectRef.child(id).off();

  return dispatch => {

    dispatch({type:"TOGGLE_LOADER",payload:true})

    projectRef.child(id).on('value', snapshot => {

      dispatch({type:"FETCH_SINGLE_PROJECT",payload:snapshot.val()})

      dispatch({type:"TOGGLE_LOADER",payload:false})

    })

  }

}

/* Create Project */

export function createProject(project) {

  return dispatch => {

    projectRef.push(project,()=>{

      dispatch({type:'PROJECT_CREATED',payload:true});

    })

  }

}

/*
*
*/
export function toggleLoader(value) {

  return {type:"TOGGLE_LOADER",payload:value}

}
