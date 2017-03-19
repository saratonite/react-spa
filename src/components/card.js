
import React , { Component } from 'react';

export default class Card extends Component {



  render(){

    return(
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <img className="right floated mini ui image" alt="The Nice" src="/images/avatar/large/elliot.jpg" />
            <div className="header">
              Elliot Fu
            </div>
            <div className="meta">
              Friends of Veronika
            </div>
            <div className="description">
              Elliot requested permission to view your contact details
            </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">Approve</div>
              <div className="ui basic red button">Decline</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
