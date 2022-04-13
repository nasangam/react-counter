import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {incriment, getRandom} from './redux';

function App() {
    const [counter, setCounter] = useState(0);
  return (
    <div className="App" style={{margin:"50px", fontSize: "20px"}}>
       <div> ===::Counter Application Deployment Live Demo::===</div><hr/>
        <div>counter : {counter} </div>
      <div><button onClick={()=>setCounter(counter+1)}>Incriment</button></div>
      <div>API_KEY: {process.env.REACT_APP_MY_API_KEY}</div>
      <div>NODE_ENV: {process.env.NODE_ENV}</div>
      <div>API_BASE: {process.env.REACT_APP_API_BASE}</div>
      <button onClick={incriment}>incriment</button>
      <button onClick={getRandom}>getRandom</button>
    </div>
  );
}
    export default App;
