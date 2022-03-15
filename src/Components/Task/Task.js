import React from 'react';
import './Task.css';
import '../ContextMenu/ContextMenu';
import ContextMenu from '../ContextMenu/ContextMenu';

class Task extends React.Component {
    render (){
        return <div class="task-container">
            <span class="task-container-header">
                <div class="task-container-title">Hey there</div>
                <ContextMenu level={this.props.level}></ContextMenu>
            </span>
            <br></br>
            <div class="item-container" id={"item-container-level-".concat(this.props.level)} children="0"></div>
            
        </div>
    }

    
}

export default Task;