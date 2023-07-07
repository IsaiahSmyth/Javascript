import logo from './logo.svg';
import './App.css';

import Box from './components/Box';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person name="Jane Doe" age={21} hairColor="black"/>
      <Person name="John Smith" age={33} hairColor="brown"/>
      
      
    <Box color="red"/>
    <Box color='blue'/>
    <Box color='green'/>
    <Box color='purple'/>
    </div>
  );
}

export default App;