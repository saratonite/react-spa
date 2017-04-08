import React, { Component } from 'react'
import task_list_item from './task-list-item.css';
export default class TaskListItem extends Component {

  constructor(props){
    super(props);
    this.onClickRemove = this.onClickRemove.bind(this);
    this.changeCompleted = this.changeCompleted.bind(this);
    this.state = {task:null,taskId:null}

  }

  /**/
  componentWillMount() {
    this.setState({task:this.props.task,taskId:this.props.taskId});
  }

  componentWillReceiveProps(nextProps) {
    console.info('Next props',nextProps)
    this.setState({task:nextProps.task,taskId:nextProps.taskId});

  }

  /* Chnage completed checkbox */
  changeCompleted(e){
    let task = this.state.task
    task.completed = !task.completed
    this.setState({task:task})
    this.props.taskUpdateHandler(this.props.taskId,task);
  }

  onClickRemove(){

    const ans =  confirm("Are you really want to delete this task?")

    if(ans) this.props.removeItemHandler(this.props.taskId);
  }

  render(){
      const { task } = this.state;

      if(task == null) {

        return <p>Loading</p>

      }

    return(
          <div className="ui clearing segment">
            <div className="task-item">
                <div className="item-content">

                  <div className="ui checkbox">
                    <input type="checkbox" onChange={this.changeCompleted} name="completed"  checked={task.completed} />
                    <label>{task.title}</label>
                  </div>

                </div>

                <div className="item-actions">
                  <div className="mini ui red right floated button" onClick={this.onClickRemove}>REMOVE</div>
                </div>


            </div>


          </div>

    );

  }
}
