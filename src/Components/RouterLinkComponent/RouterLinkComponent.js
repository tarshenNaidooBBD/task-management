import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import logo from '../../images/appIcon.ico'
import RouteNotFound from '../RouteNotFoundComponent/RouteNotFoundComponent'
import EditComponent from '../EditComponent/EditComponent';
import HomeComponent from '../HomeComponent/HomeComponent';
import RemindersComponent from '../RemindersComponent/RemindersComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';

class RouterLink extends React.Component {

    render() {
        return (
            <Router>
                <div id="AppRouteDiv" style={{"margin-left":'50px',"margin-top":'50px'}}>
                <img src={logo} alt="App Icon" width="100" height="100" style={{display:'inline'}}></img>
                <HeaderComponent titleText="Task Management System"></HeaderComponent>
                <div className="AppRouterDiv">
                    <ul id='linkList'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/reminders" >Reminders</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route exact path="/" element={<HomeComponent/>}></Route>
                        <Route exact path="/reminders" element={<RemindersComponent/>}></Route>
                        <Route exact path="/edit" element={<EditComponent/>}></Route>
                        <Route exact path="/*" element={<RouteNotFound/>}></Route>
                    </Routes>
                </div>
                </div>
            </Router>
        )
    }
}

export default RouterLink;