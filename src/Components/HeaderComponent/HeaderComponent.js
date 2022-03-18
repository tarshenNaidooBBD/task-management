import React from 'react'

class HeaderComponent extends React.Component {

    render () {
        return (
            <span>
                <h1 style={{color:this.props.color}}>{this.props.titleText}</h1>
            </span>
        );
    }
}

export default HeaderComponent;