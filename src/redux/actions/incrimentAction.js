export const incrimentAction = (dispatch) => {
    dispatch(dispatch=>{
        dispatch(dispatch=>dispatch({type:"INCR"}));
    })
    // setTimeout(()=>{
    //     dispatch({type:"INCR"});
    // },1000);
}