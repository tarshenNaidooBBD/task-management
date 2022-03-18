import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import {getTasks} from '../../Services/TaskHelper'
import TaskComponent from '../TaskComponent/TaskComponent';
<script type="text/javascript" src='../../Services/TaskHelper'></script>

class HomeComponent extends React.Component {
    render (){
        //getTasks();
        return (
            <div>
                <HeaderComponent color="orange" titleText="Home"></HeaderComponent>
                <TaskComponent level={0}index={0}></TaskComponent>
            </div>
        );
    }
}

export default HomeComponent;