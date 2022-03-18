import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import TaskComponent from './Components/TaskComponent/TaskComponent';
import RouteNotFound from './Components/RouteNotFoundComponent/RouteNotFoundComponent';
import EditComponent from './Components/EditComponent/EditComponent';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import RemindersComponent from './Components/RemindersComponent/RemindersComponent';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';

function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <TaskComponent level={0} index = {0} id={"Task".concat(0).concat(0)}></TaskComponent>
      </header>
    </div>
  );
  */
  <Router>
    <div id="AppRouteDiv" style={{"margin-left":'50px',"margin-top":'50px'}}>
      <HeaderComponent color="#444444"></HeaderComponent>
      <div className="AppRouterDiv">
          <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/reminders">Reminders</Link>
              </li>
              <li>
                  <Link to="/edit">Edit</Link>
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
  );
}

export default App;
