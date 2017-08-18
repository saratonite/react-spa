import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTask } from '../../actions/task-actions'
class SingleTask extends Component {

    componentDidMount () {
        console.log(this.props);

        let { id, taskId } = this.props.match.params;

        this.props.getTask(id,taskId);


        
    }

    render () {

        let { task } = this.props;
        
        return(
        <div className="ui container-fluid">
            <div className="ui message">
                <div className="header">
                    {task.title}
                </div>
                <p>{task.description}</p>
            </div>
        </div>
           
        )
    }
}

function mapStateToProps(state) {

    return {
        task:state.task.singleTask
    }
}
export default connect(mapStateToProps,{ getTask })(SingleTask);