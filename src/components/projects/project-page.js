import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProjectList  from './project-list';

console.info(ProjectList)

class ProjectPage extends Component {

  constructor(props) {
    super(props)

  }

  /*
  * Component did mount
  */

  componentDidMount(){

    console.log(this.props);

  }


  /* Render function */
  render(){
    return(

      <div>
        <h1>Projects</h1>
        <ProjectList></ProjectList>

      </div>

    );
  }

}

function mapPropsToState(state){

  return {
    projects:state.projects
  }

}

export default connect(mapPropsToState)(ProjectPage);
