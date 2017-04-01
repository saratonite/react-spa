import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project-actions';

class ProjectDetails extends Component {

  componentDidMount(){


     let { id } = this.props.match.params;

     this.props.fetchProject(id);
  }

   render() {

     let { project } = this.props;

     return(
       <div>
          <h1>{ project.name }</h1>
          <p>{ project.discription }</p>
       </div>

     )
   }
}

function mapPropsToState(state){

  return {
    project: state.project.singleProject
  }

}

export default connect(mapPropsToState,{fetchProject})(ProjectDetails)
