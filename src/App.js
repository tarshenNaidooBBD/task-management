import './App.css';
import TaskComponent from './Components/TaskComponent/TaskComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskComponent level={0} index = {0} id={"Task".concat(0).concat(0)}></TaskComponent>
      </header>
    </div>
  );
}

export default App;
