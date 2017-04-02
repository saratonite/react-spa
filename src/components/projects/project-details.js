import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project-actions';
import Loader from '../shared/loader';
import CreateTask from '../task/create-task';
import TaskList from '../task/task-list';

class ProjectDetails extends Component {

  componentDidMount(){


     let { id } = this.props.match.params;

     this.props.fetchProject(id);
  }

   render() {

     let { project , isLoading } = this.props;

     let content = "";

     if(isLoading) {

       content =  <Loader></Loader>

     }
     else{
       content = <div>
                    <h1>{ project.name }</h1>
                    <p>{ project.discription }</p>
                    <TaskList projectId={this.props.match.params.id}/>
                    <CreateTask projectId={this.props.match.params.id}/>

                  </div>
     }

     return(
       <div>
            {content}
       </div>

     )
   }
}

function mapPropsToState(state){

  return {
    project: state.project.singleProject,
    isLoading: state.project.isLoading
  }

}

export default connect(mapPropsToState,{fetchProject})(ProjectDetails)
