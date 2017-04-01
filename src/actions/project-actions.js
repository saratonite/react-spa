import db from '../database';

let projectRef = db.ref("bucket");

export  function fetchProjects(){

  return dispatch => {
    projectRef.on('value',snapshot => {
      console.info("data",snapshot.val());
      dispatch({type:"FETCH_PROJECTS",payload:snapshot.val()});
    })
  }

}
