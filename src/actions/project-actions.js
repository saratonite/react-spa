import db from '../database';

let projectRef = db.ref("bucket");

/*
* Get list of projects , the root node
*/
export  function fetchProjects(){

  projectRef.off()

  return dispatch => {
    projectRef.on('value',snapshot => {

      dispatch({type:"FETCH_PROJECTS",payload:snapshot.val()});
    })
  }

}

/*
* Get single project details
*/

export function fetchProject(id){

  projectRef.child(id).off();

  return dispatch => {

    projectRef.child(id).on('value', snapshot =>{

      dispatch({type:"FETCH_SINGLE_PROJECT",payload:snapshot.val()})
    })

  }

}
