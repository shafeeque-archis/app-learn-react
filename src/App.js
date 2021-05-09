import ReactDOM from 'react-dom'
import './App.css';

import ClassComponent from './01_ClassComponent/01_ClassComponent';
import FunctionalComponent from './02_FunctionalComponent/02_FunctionalComponent';
import Clock from './Clock/Clock'
import Button from './EventHandling/EventHandling';
import ConditionalRendering from './ConditionalRendering/ConditionalRendering';



function App() {
  const time = new Date().getHours();
  
  return (
    <div className="App">
      <Button />
      <h1>Components</h1>
      <h2>01 Class component</h2>
      <ClassComponent name="PROP"/>
      <FunctionalComponent name="Functional component PROP"/>
      <Clock />
      <Clock />
      <Clock />
      <ConditionalRendering time="15" />
    </div>
  );
}

export default App;
