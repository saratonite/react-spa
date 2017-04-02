import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTaskList } from '../../actions/task-actions';
import _ from 'underscore';

class TaskList extends Component {



  componentDidMount() {
    console.log('Component:TaskList',this)
    let { projectId } = this.props;
    this.props.fetchTaskList(projectId);
  }


  renderList(){

    console.log('Render List',this)
    let {tasks} = this.props;


    console.info("Sizzee",_.size(tasks))

    if(_.size(tasks) === 0) {

      return <div>No Tasks</div>

    }

      return _.map(tasks,(task,key) => {
         if(task) return <p key={key}>{task.title}</p>
      })



  }

  render() {
    return(
      <div className="ui feed">
        <div className="event">
          <div className="label">

          </div>
          <div className="content">
            You added Elliot Fu to the group <a>Coworkers</a>
            {this.renderList()}
          </div>
        </div>
      </div>
    )
  }
}

function mapPropsToState(state){

  return {
    tasks:state.task.list
  }

}

export default connect(mapPropsToState,{fetchTaskList}) (TaskList);
