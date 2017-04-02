import db from '../database';

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

/*
*
*/
export function toggleLoader(value) {

  return {type:"TOGGLE_LOADER",payload:value}

}
