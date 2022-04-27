import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {incriment, getRandom} from './redux/redux';
import { connect } from 'react-redux';
import Child from './Child';
import {reselectRandom, reselectCounter} from './redux/selectors/selectors';
import {randomAction} from './redux/actions/randomAction';
import {incrimentAction} from './redux/actions/incrimentAction';
import {updateCounter, updateRandom} from './redux/actions/index'
import Checkbox from './componnets/Checkbox';


function App(props) {
    const [counter, setCounter] = useState(0);
    const [random, setRandom] = useState(0);

    const setStateCounter = ()=>setCounter(counter+1)
    const setSateRandom = ()=>setRandom(Math.random())

    // setTimeout(function(){
    //   props.dispatch({
    //     type: "INCR"
    //   })
    // },5000)

    useEffect(()=>{
      console.log("APP::props.counter:",props.counter, ", props.random",props.random)
    });
    useEffect(()=>{
      // props.dispatch({
      //     type: "INCR"
      //   })
      props.updateCounter();
    },[])

  return (
    <div className="App" style={{margin:"50px", fontSize: "20px"}}>
       <div> ===::Counter Application Deployment Live Demo::===</div><hr/>
        <div>redux counter : {props.counter} </div>
        <div>redux random: {props.random} </div>
      
      {/* <div>API_KEY: {process.env.REACT_APP_MY_API_KEY}</div>
      <div>NODE_ENV: {process.env.NODE_ENV}</div>
      <div>API_BASE: {process.env.REACT_APP_API_BASE}</div> */}
      <button onClick={props.updateCounter}>incriment</button>
      <button onClick={props.updateRandom}>getRandom</button>
      <hr></hr>
      <div>state counter : {counter} </div>
      <div>state random: {random} </div>
      <button onClick={setStateCounter}>incriment</button>
      <button onClick={setSateRandom}>getRandom</button>
      <Checkbox label="terms & condiitons" checked={false} onChange={(e, checked)=> console.log("terms selection", e.target.checked)}></Checkbox>
    </div>
  );
}
const mapStateToProps = (state) =>{
  return {
    counter: reselectCounter(state),
    random: reselectRandom(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // updateCounter: updateCounter(dispatch),
    // updateRandom: updateRandom(dispatch)
    updateCounter: () => dispatch(incrimentAction),
    updateRandom: () => dispatch(randomAction)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
