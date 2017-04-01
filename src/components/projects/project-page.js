import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProjectList  from './project-list';
import { fetchProjects } from '../../actions/project-actions';
class ProjectPage extends Component {


  /*
  * Component did mount
  */

  componentDidMount(){

    this.props.fetchProjects();

  }


  /* Render function */
  render(){
    return(

      <div>
        <h1>Projects</h1>
        <ProjectList projects={this.props.project.list}></ProjectList>

      </div>

    );
  }

}

function mapPropsToState(state){

  return {
    project:state.project
  }

}


export default connect(mapPropsToState,{fetchProjects})(ProjectPage);
