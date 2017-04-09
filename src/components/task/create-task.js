import React, { Component } from 'react';
import { connect } from 'react-redux';
import Validator from 'validator';
import _ from 'underscore';
import classNames from 'classnames';

import { createTask } from '../../actions/task-actions';


class CreateTask extends Component {

  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = Object.assign({errors:{}},props.task);


  }

  componentDidMount(){
    console.info(':::::::',this.props)
  }

  handleSubmit(){

    if(!this.validate()){
      return false;
    }

    this.props.addTask(this.props.projectId,this.state);

    this.setState({title:'',description:''});

  }

  /* Vaslidate inputs */
  validate() {

    let errors = {};

    if(Validator.isEmpty(this.state.title)){

      errors.title = "This field required"

    }

    if(Validator.isEmpty(this.state.description)) {
      errors.description = "This field required"
    }

    this.setState({errors:errors});

    if(_.size(errors)){
      return false;
    }

    return true;

  }

  handleChange(e) {

    console.log(e.target.name)

    this.setState({[e.target.name]:e.target.value});

  }

  render(){

    let { errors } = this.state;

    return(
      <div className="ui segment form">
      <h3>Add Task</h3>
      <div className={ classNames("field",{'error':errors.title}) }>
        <label>Title</label>
        <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
        { errors.title && <div className="ui pointing red basic label">{ errors.title }</div>}
      </div>
        <div className={ classNames("field",{'error':errors.description}) }>
          <label>Description</label>
          <textarea rows="2" name="description" onChange={this.handleChange} value={this.state.description}></textarea>
          { errors.description && <div className="ui pointing red basic label">{ errors.description }</div>}
        </div>

        <div className="field">
          <label>Estimated Time (In Hours)</label>
          <input type="number" name="estimated_time" onChange={this.handleChange}  />
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
