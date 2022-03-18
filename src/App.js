import './App.css';
import RouterLink from './Components/RouterLinkComponent/RouterLinkComponent';

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
    <div style={{backgroundColor:"gray", 'margin': 10}}>
      <RouterLink/>
    </div>
  );
}

export default App;
