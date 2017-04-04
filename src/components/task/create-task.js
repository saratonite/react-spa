import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTask } from '../../actions/task-actions';


class CreateTask extends Component {

  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = props.task;


  }

  componentDidMount(){
    console.info(':::::::',this.props)
  }

  handleSubmit(){

    console.info("Just clicked submit button")
    this.props.addTask(this.props.projectId,this.state);

    this.setState({title:'',description:''});

  }

  handleChange(e) {

    console.log(e.target.name)

    this.setState({[e.target.name]:e.target.value});

  }

  render(){


    return(
      <div className="ui form">
      <h3>Add Task</h3>
      <div className="field">
        <label>Title</label>
        <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
      </div>
        <div className="field">
          <label>Description</label>
          <textarea rows="2" name="description" onChange={this.handleChange} value={this.state.description}></textarea>
        </div>

        <button className="ui button" onClick={this.handleSubmit}>ADD</button>
      </div>
    )

  }
}

function mapPropsToState(state){
  return {
    task: state.task.newTask
  }
}

export default connect(mapPropsToState,{addTask:createTask})(CreateTask);
