import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProjectList  from './project-list';
import { fetchProjects } from '../../actions/project-actions';
import Loader from '../shared/loader';
class ProjectPage extends Component {


  /*
  * Component did mount
  */

  componentDidMount(){

    this.props.fetchProjects();

  }


  /* Render function */
  render(){

    let content = 'loading...';

    if(this.props.project.isLoading){

      content = <Loader></Loader>

    }
    else{
      content = <ProjectList projects={this.props.project.list}></ProjectList>
    }

    return(

      <div className="ui active">
        <h1>Projects</h1>
        {content}

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
