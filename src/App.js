import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import {Provider} from 'react-redux';

// Import store
import store  from './store'

import Home from './components/home';
import About from './components/about';
import Notfound from './components/notfound';
import ProjectPage from './components/projects/project-page';





class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="ui  container">
          <Router>
            <div>
              <div className="ui three item menu">
                <Link className="item" to="/">Home</Link>
                <Link className="item" to="/projects">Projects</Link>
                <Link className="item" to="/about">Topics</Link>
              </div>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/projects" component={ProjectPage}></Route>
                <Route component={Notfound}/>
              </Switch>
            </div>
          </Router>
        </div>
    </Provider>
    );
  }
}

export default App;
