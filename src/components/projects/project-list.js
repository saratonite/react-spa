import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class ProjectList extends Component {



  listProjects(){


    return this.props.projects.map((p,i) => {
      return(

        <div className="card" key={i}>
          <div className="content">
            <div className="header">{p}</div>
            <div className="description">
             A Sample projects
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
