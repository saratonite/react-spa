import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { loginUsingEmail } from '../../actions/auth-actions';
import Validator from 'validator';
class Login extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {email:'',password:'',errors:{}}

  }

  componentDidMount() {
    console.log('Component:Login',this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log('Next Props', nextProps);
    console.log(nextProps.auth.errors.message)
  }

  handleChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  handleSubmit(e) {

    this.props.loginUsingEmail(this.state.email,this.state.password);

    e.preventDefault();

  }

  validate() {
    /* TODO */
    let errors = {};
    if(Validator.isEmpty()){
      errors.email = "Invalid email";
    }
    if(!Validator.isEmail(this.state.email)){
      errors.email = "Invalid email";
    }
  }
  showErrorAlert(errorMessage) {
    return(
      <div className="ui negative message">
        <i className="close icon"></i>
        <div className="header">
        {errorMessage}
        </div>
      </div>
    )
  }

  render() {

    if(this.props.auth.user){
      return(
        <Redirect to="/"></Redirect>
      )
    }

    return(
      <div className="login-page">
      <form className="ui segment form" onSubmit={this.handleSubmit}>
        <h3>Login</h3>
        { this.props.auth.errors.message && this.showErrorAlert(this.props.auth.errors.message)}
        <div className="Field">
          <label>Email</label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </div>

        <div className="Field">
          <label>Password</label>
          <input type="text" name="password" value={this.state.password}  onChange={this.handleChange} />
        </div>
        <button className="ui button" >LOGIN</button>

      </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps,{ loginUsingEmail }) (Login)
