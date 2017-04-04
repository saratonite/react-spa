import React, { Component } from 'react'
import task_list_item from './task-list-item.css';
export default class TaskListItem extends Component {

  constructor(props){
    super(props);
    this.onClickRemove = this.onClickRemove.bind(this);
  }

  onClickRemove(){

    const ans =  confirm("Are you really want to delete this task?")

    if(ans) this.props.removeItemHandler(this.props.taskId);
  }

  render(){
      const { task } = this.props;

    return(
          <div className="ui clearing segment">

          <input type="checkbox" name="completed" checked={task.completed} /> {task.title}
            <div className="mini ui red right floated button" onClick={this.onClickRemove}>REMOVE</div>
          </div>

    );

  }
}
