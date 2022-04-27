import {incrimentAction} from './incrimentAction';
import {randomAction} from './randomAction';

export const updateCounter = (dispatch) => {
    return ()=>{
        setTimeout(()=>{
            dispatch(incrimentAction());
        },1000);
        dispatch(incrimentAction());
    }
}

export const updateRandom =(dispatch) => {
    return ()=>{
        setTimeout(()=>{
            dispatch(randomAction());
        },1000);
        dispatch(randomAction());
    }
}