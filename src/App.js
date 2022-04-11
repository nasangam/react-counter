import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [counter, setCounter] = useState(0);
  return (
    <div className="App" style={{margin:"50px", fontSize: "20px"}}>
       <div> ===::Counter Application::===</div><hr/>
        <div>counter : {counter} </div>
      <div><button onClick={()=>setCounter(counter+1)}>Incriment</button></div>
    </div>
  );
}
    export default App;
