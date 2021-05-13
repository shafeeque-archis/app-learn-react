import ReactDOM from 'react-dom'
import './App.css';

import ClassComponent from './01_ClassComponent/01_ClassComponent';
import FunctionalComponent from './02_FunctionalComponent/02_FunctionalComponent';
import Clock from './Clock/Clock'
import Button from './EventHandling/EventHandling';
import ConditionalRendering from './ConditionalRendering/ConditionalRendering';
import LoginControl from './ConditionalRendering/LoginControl';
import Numbers from './ListAndKeys/ListAndKeys';
import CompositionVsInheritance from './compositionVsInheritance/compositionVsInheritance';



function App() {
  const time = new Date().getHours();
  
  return (
    <div className="App">
      <LoginControl />
      <Button />
      <h1>Components</h1>
      <h2>01 Class component</h2>
      <ClassComponent name="PROP"/>
      <FunctionalComponent name="Functional component PROP"/>
      <Clock />
      <ConditionalRendering time="15" />
      <Numbers />
      <CompositionVsInheritance>
        <h3>This is a Child Title</h3>
        <p>This is a child Paragraph!</p>
      </CompositionVsInheritance>
    </div>
  );
}

export default App;
