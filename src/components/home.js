import React, { Component } from 'react';

export default class Home extends Component {


  /* Component did mount */

  componentDidMount(){
    console.info(this.props);
    //console.info(this.state);
  }

  render(){

    return(
      <div>
      <h1>Home Component</h1>
      </div>

    )
  }
}
