import {applyMiddleware, combineReducers, createStore} from 'redux';
/*const store = createStore(<<reducer>>, <<initialState>>, <<middleWare>>);*/
/*reducer(<<state>>,<<action>>){ return <<state>>}*/
/*store ==> 
    const unsubscribe = store.subscribe(()=>{});
    store.dispach(action);
    store.getState();
    store.replaceReducer(nextReducer);
*/
import logger from 'redux-logger';
const randomReducer = (state={value:0}, action) => {
    switch(action.type){
        case 'RANDOM':
            return Math.random();
        default:
            return {...state};
    }
}
const counterReducer = (state={value:1}, action) =>{
    switch (action.type) {
        case 'INCR':
            return {...state, value:state.value+ 1};
        default:
            return {...state};
    }
}
const combinedreducer = combineReducers({counter:counterReducer, random:randomReducer});
const loggerMiddleWare = store => {
        return (next) => {
            return (action) => {
                console.log("action: ", action, "State:", store.getState());
                next(action);
            }
    }
}

const initialState = {counter: {value: 0} , random: { value:0} }
const store = createStore(combinedreducer, initialState, applyMiddleware(loggerMiddleWare, logger));
window.__dispatch__ = store.dispatch;
store.subscribe(()=>{
    const state = store.getState();
    console.log(state);
})

export const incriment = ()=>{
    const action = {
        type: 'INCR'
    }
    store.dispatch(action);
}
export const getRandom = ()=>{
    const action = {
        type: 'RANDOM'
    }
    store.dispatch(action);
}