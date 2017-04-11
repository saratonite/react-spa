import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../actions/project-actions';

class CreateProject extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    // Set Initial state

    this.state = {name:'title',description:'Description'}

  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createProject(this.state);


  }

  /* Handle Change  */
  handleChange(e) {

    this.setState({[e.target.name]:e.target.value});

  }

  render() {

    return(
      <form className="ui segment form" onSubmit={this.handleSubmit}>
        <h3>Add Project</h3>
        <div className="Field">
          <label>Title</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </div>

        <div className="Field">
          <label>Description</label>
          <textarea rows="2" name="description" value={this.state.description}  onChange={this.handleChange} ></textarea>
        </div>
        <button className="ui button" >ADD</button>

      </form>
    );

  }
}

function mapPropsToState(state) {

  return {

  }

}

export default connect(mapPropsToState,{createProject})(CreateProject)
