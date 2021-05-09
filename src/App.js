import './App.css';

import ClassComponent from './01_ClassComponent/01_ClassComponent';
import FunctionalComponent from './02_FunctionalComponent/02_FunctionalComponent';

function App() {
  return (
    <div className="App">
      <h1>Components</h1>
      <h2>01 Class component</h2>
      <ClassComponent name="PROP"/>
      <FunctionalComponent name="Functional component PROP"/>
    </div>
  );
}

export default App;
