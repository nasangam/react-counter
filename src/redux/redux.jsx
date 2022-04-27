import store from './store';
/*const store = createStore(<<reducer>>, <<initialState>>, <<middleWare>>);*/
/*reducer(<<state>>,<<action>>){ return <<state>>}*/
/*store ==> 
    const unsubscribe = store.subscribe(()=>{});
    store.dispach(action);
    store.getState();
    store.replaceReducer(nextReducer);
*/






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