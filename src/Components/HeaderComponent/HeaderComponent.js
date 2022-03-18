import React from 'react'
import logo from '../../images/appIcon.ico'

class HeaderComponent extends React.Component {

    render () {
        return (
            <span>
                <img src={logo} alt="App Icon" width="100" height="100" style={{display:'inline'}}>
                
                </img>
                <h1 style={{display:'inline'}}>Task Management System</h1>
            </span>
        );
    }
}

export default HeaderComponent;