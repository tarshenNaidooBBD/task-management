import React from 'react';
import './TaskComponent.css';
import '../ContextMenuComponent/ContextMenuComponent';
import ContextMenuComponent from '../ContextMenuComponent/ContextMenuComponent';
import Task from '../../Objects/Task';

class TaskComponent extends React.Component {

    render (){
        return <div class="task-container" id={"task-container-".concat(this.props.level).concat(this.props.index)}>
            <span class="task-container-header">
                <div class="task-container-title">Hey there</div>
                <ContextMenuComponent level={this.props.level} index={this.props.index}></ContextMenuComponent>
            </span>
            <br></br>
            <div class="item-container" id={"item-container-level-".concat(this.props.level)} children="0"></div>
            
        </div>
    }

    
}

export default TaskComponent;