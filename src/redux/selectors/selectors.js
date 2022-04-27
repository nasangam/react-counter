import {createSelector} from 'reselect';
export const selectCounter = (state) => state.counter.value;
export const reselectCounter = createSelector([selectCounter],(counter)=>{
    return counter;
})

export const selectRandom = (state) => Math.ceil(state.random.value);
export const reselectRandom = createSelector([selectRandom],(random)=>{  
    return random;
})