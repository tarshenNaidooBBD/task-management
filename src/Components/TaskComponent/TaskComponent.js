import React from 'react';
import './TaskComponent.css';
import '../ContextMenuComponent/ContextMenuComponent';
import ContextMenuComponent from '../ContextMenuComponent/ContextMenuComponent';
import TaskItemComponent from '../TaskItemComponent/TaskItemComponent';

class TaskComponent extends React.Component {

    render (){
        return <div class="task-container" id={"task-container-".concat(this.props.level).concat(this.props.index)}>
            <div style={{'margin':10}}>
                <span class="task-container-header">
                    <div class="task-container-title">Hey there</div>
                    <ContextMenuComponent level={this.props.level} index={this.props.index}></ContextMenuComponent>
                </span>
                <div style={{'margin-left':10}}>
                    <br></br>
                    <TaskItemComponent></TaskItemComponent>
                    <div class="item-container" id={"item-container-level-".concat(this.props.level)}>Subtasks:</div>
                </div>
            </div>
        </div>
    }

    
}

export default TaskComponent;