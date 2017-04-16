import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signupUsinEmail } from '../../actions/auth-actions';
import { Redirect } from 'react-router';
class Signup extends Component {

  constructor(props) {
    super(props)

    this.state =  { email:'',password:'',confirmPassword:''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  /* Handle Input Change */
  handleChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }

  /* Handle Submit */
  handleSubmit(e){

    //TODO : Validate
    this.props.signupUsinEmail(this.state.email,this.state.password)
    e.preventDefault()

  }

  render() {
    if(this.props.auth.user){
      return(
        <Redirect to="/"></Redirect>
      )
    }
    return(
      <div className="signup">
        <form className="ui segment form" onSubmit={this.handleSubmit}>
          <h3>Signup</h3>
          <div className="Field">
            <label>Email</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>

          <div className="Field">
            <label>Password</label>
            <input type="text" name="password" value={this.state.password}  onChange={this.handleChange} />
          </div>
          <button className="ui button primary" >SIGNUP</button>

        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    auth:state.auth
  }
}

export default connect(mapStateToProps,{signupUsinEmail})(Signup)
