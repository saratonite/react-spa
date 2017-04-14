import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { loginUsingEmail } from '../../actions/auth-actions';
class Login extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {email:'',password:''}

  }

  componentDidMount() {
    console.log('Component:Login',this.props)
  }

  handleChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  handleSubmit(e) {

    this.props.loginUsingEmail(this.state.email,this.state.password);

    e.preventDefault();

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
