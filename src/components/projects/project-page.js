import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProjectList  from './project-list';

class ProjectPage extends Component {


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
        <ProjectList projects={this.props.projects}></ProjectList>

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
