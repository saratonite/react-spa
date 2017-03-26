import db from '../database';

let projectRef = db.ref("bucket");

let dummyProjectData = [{name:"Project 3"},{name:"Projec 4"}];

export  function fetchProjects(){

  return dispatch => {
    projectRef.on('value',snapshot => {
      console.info("data",snapshot.val());
      dispatch({type:"FETCH_PROJECTS",payload:snapshot.val()});
    })
  }

}
