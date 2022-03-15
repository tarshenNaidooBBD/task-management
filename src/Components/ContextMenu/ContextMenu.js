import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Task from '../Task/Task';
import './ContextMenu.css';

class ContextMenu extends React.Component {
    render (){
        return <div class="context-button" onClick={this.toggleMenu}>
            <div class="context-menu" id={"menu-".concat(this.props.level)}>
                <button onClick={this.addTask}>Add subtask</button>
                <button>Remove Task</button>
            </div>
        </div>;
    }

    toggleMenu = () => {
        const contextMenu = document.getElementById("menu-".concat(this.props.level));
        if (contextMenu.style.visibility === "visible"){
            contextMenu.style.visibility = "hidden";
        } else {
            contextMenu.style.visibility = "visible";
        }
    
    }

    addTask = () => {
        const currentItemContainer = document.getElementById("item-container-level-".concat(this.props.level));
        const parentTask= document.getElementById("parent-item-container-".concat(this.props.level));
        const newTask = new Task({level :parseInt(this.props.level)+1});
        console.log(ReactDOM.createPortal(newTask.render(), currentItemContainer));
        //ReactDOM.render(newTask.render(), currentItemContainer);
        ReactDOM.render(ReactDOM.createPortal(newTask.render(), currentItemContainer), document.createElement('div'));

        

    }
}

export default ContextMenu;