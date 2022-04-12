import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [counter, setCounter] = useState(0);
  return (
    <div className="App" style={{margin:"50px", fontSize: "20px"}}>
       <div>===::Counter Application::===</div><hr/>
        <div>counter : {counter} </div>
      <div><button onClick={()=>setCounter(counter+1)}>Incriment</button></div>
      <div>API_KEY: {process.env.REACT_APP_MY_API_KEY}</div>
      <div>API_KEY: {process.env.NODE_ENV}</div>
    </div>
  );
}
    export default App;
