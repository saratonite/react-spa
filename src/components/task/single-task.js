import React, { Component } from 'react';

export default class SingleTask extends Component {

    componentDidMount () {
        console.log(this.props);

        let { id, taskId} = this.props.match;
        
    }

    render () {

        return(
            <div>
                Single Task
            </div>
        )
    }
} 