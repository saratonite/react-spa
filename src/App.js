import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


import Home from './components/home';
import About from './components/about';
import Notfound from './components/notfound';
import ProjectPage from './components/projects/project-page';
import ProjectDetails from './components/projects/project-details';
import CreateProject from './components/projects/create-project';

import SingleTask from './components/task/single-task';

import { authChange , loginUsingEmail } from './actions/auth-actions';

/**/
import Login from './components/auth/login';
import Signup from './components/auth/signup';


class App extends Component {
  componentDidMount() {
    console.info('App::',this.props)
    this.props.authChange();
  }
  render() {
    return (

      <div className="ui app-container">
          <div className="app-main ">
            <Router>
              <div>
                <div className="ui three item menu">
                  <Link className="item" to="/">Home</Link>
                  <Link className="item" to="/projects">Projects</Link>
                  <Link className="item" to="/about">About</Link>
                </div>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route exact path="/projects" component={ProjectPage}></Route>
                  <Route path="/projects/new" component={CreateProject}></Route>
                  <Route exact path="/projects/:id" component={ProjectDetails}></Route>
                  <Route exact path="/projects/:id/tasks/:taskId" component={ SingleTask }></Route>
                  <Route exact path="/login" component={Login} ></Route>
                  <Route exact path="/signup" component={Signup} ></Route>
                  <Route component={Notfound}/>
                </Switch>
              </div>
            </Router>
            </div>
          <footer>
          &copy; Sarath
          </footer>
        </div>


    );
  }
}

function mapStateToProps(state) {
  return {
    auth:state.auth
  }
}

export default connect(mapStateToProps,{ authChange, loginUsingEmail }) (App);
