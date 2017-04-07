import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskListItem from './task-list-item';
import { fetchTaskList,removeTask,updateTask } from '../../actions/task-actions';
import _ from 'underscore';

class TaskList extends Component {


  constructor(props){
    super(props)
    this.itemRemoveHandler = this.itemRemoveHandler.bind(this)
    this.taskUpdateHandler = this.taskUpdateHandler.bind(this)
  }


  componentDidMount() {
    console.log('Component:TaskList',this)
    let { projectId } = this.props;
    this.props.fetchTaskList(projectId);
  }


  /* On Remove An Item */

  itemRemoveHandler(taskId){
    let { projectId } = this.props;
    this.props.removeTask(projectId,taskId);
  }

  /* Task Update */

  taskUpdateHandler(taskId,taskBody) {
    console.log("Task update handler",taskBody)
    let { projectId } = this.props;
    this.props.updateTask(projectId,taskId,taskBody);
  }

  renderList(){

    console.log('Render List',this)
    let {tasks} = this.props;


    console.info("Sizzee",_.size(tasks))

    if(_.size(tasks) === 0) {

      return (
        <div className="ui icon message">
          <i className="inbox icon"></i>
          <div className="content">
            <div className="header">
            Task list empty!
            </div>
            <p>Add new tasks!!</p>
          </div>
        </div>
      )

    }

      return _.map(tasks,(task,key) => {
         if(task) return <TaskListItem key={key} task={task} taskId={key} removeItemHandler={this.itemRemoveHandler} taskUpdateHandler={this.taskUpdateHandler}></TaskListItem>
      })



  }

  render() {
    return(
      <div className="ui">

          {this.renderList()}
      </div>
    )
  }
}

function mapPropsToState(state){

  return {
    tasks:state.task.list
  }

}

export default connect(mapPropsToState,{ fetchTaskList,removeTask,updateTask}) (TaskList);
