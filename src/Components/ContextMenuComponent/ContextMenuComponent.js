import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import TaskComponent from '../TaskComponent/TaskComponent';
import './ContextMenuComponent.css';

class ContextMenu extends React.Component {
    render (){
        return <div class="context-button" onClick={this.toggleMenu}>
            <div class="context-menu" id={"menu-".concat(this.props.level).concat(this.props.index)} on={this.mouseLeave}>
                <button onClick={this.addTask}>Add subtask</button>
                <button onClick={this.removeTask}>Remove Task</button>
            </div>
        </div>;
    }

    toggleMenu = () => {

        const contextMenu = document.getElementById("menu-".concat(this.props.level).concat(this.props.index));
        if (contextMenu.style.visibility === "visible"){
            contextMenu.style.visibility = "hidden";
        } else {
            contextMenu.style.visibility = "visible";
        }
    }

    mouseLeave = () => {
        document.getElementById("menu-".concat(this.props.level)).visibility="hidden";
    }

    addTask = () => {
        if (this.props.level === 3){
            console.log("Maximum depth of tasks reached");
            return;
        }
        const currentItemContainer = document.getElementById("item-container-level-".concat(this.props.level));
        //const parentTask= document.getElementById("parent-item-container-".concat(this.props.level));
        //console.log(currentItemContainer.children.length);
        const newTask = new TaskComponent({level :this.props.level+1, index: currentItemContainer.children.length});
        //ReactDOM.render(newTask.render(), currentItemContainer);
        ReactDOM.render(ReactDOM.createPortal(newTask.render(), currentItemContainer), document.createElement('div'));
    }
    
    removeTask = () =>{
        //console.log("deleting".concat("task-container-".concat(this.props.level).concat(this.props.index)));
        //ReactDOM.unmountComponentAtNode(document.getElementById("task-container-".concat(this.props.level).concat(this.props.index)));
        //console.log(this.props.level);
        //const itemContainer = document.getElementById("item-container-level-".concat(this.props.level-1));
        //console.log(this.props.index);
        //console.log(itemContainer.children[this.props.index])
        //console.log(itemContainer.childNodes);
        //console.log(document.getElementById("task-container-".concat(this.props.level).concat(this.props.index)))
        document.getElementById("task-container-".concat(this.props.level).concat(this.props.index)).remove();
        //itemContainer.removeChild(itemContainer.);

    }
}

export default ContextMenu;