import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import _ from 'underscore'

export default class ProjectList extends Component {



  listProjects(){
    if(_.size(this.props.projects) == 0) return <h2>Empty Projects</h2>;
    return _.map(this.props.projects,(p,i) => {

      return(

        <div className="card" key={i}>
          <div className="content">
            <div className="header">{p.name}</div>
            <div className="description">
             {p.discription}
            </div>
          </div>
            <Link className="ui bottom attached button" to={'projects/'+i}>View</Link>
        </div>
      )
    })


  }

  render() {
    return(
      <div className="ui cards">
        {this.listProjects()}
      </div>
    )
  }
}
