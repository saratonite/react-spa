import React, { Component } from 'react';
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



class App extends Component {
  render() {
    return (


      <div className="ui  container">
          <Router>
            <div>
              <div className="ui three item menu">
                <Link className="item" to="/">Home</Link>
                <Link className="item" to="/about">About</Link>
                <Link className="item" to="/topics">Topics</Link>
              </div>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route component={Notfound}/>
              </Switch>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
