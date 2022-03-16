import React from 'react';
import './Task.css';
import '../ContextMenu/ContextMenu';
import ContextMenu from '../ContextMenu/ContextMenu';

class Task extends React.Component {

    id = "";
    title = "";
    status = false;
    tasks = [];
    duedate = "";

    render (){
        return <div class="task-container" id={"task-container-".concat(this.props.level).concat(this.props.index)}>
            <span class="task-container-header">
                <div class="task-container-title">Hey there</div>
                <ContextMenu level={this.props.level} index={this.props.index}></ContextMenu>
            </span>
            <br></br>
            <div class="item-container" id={"item-container-level-".concat(this.props.level)} children="0"></div>
            
        </div>
    }

    
}

export default Task;