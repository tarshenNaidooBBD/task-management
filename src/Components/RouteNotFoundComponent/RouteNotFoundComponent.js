import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';

class RouteNotFound extends React.Component {

    render() {
        return <HeaderComponent titleText="Error! Page not found"/>
    }
}

export default RouteNotFound;