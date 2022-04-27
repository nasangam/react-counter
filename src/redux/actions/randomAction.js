export const randomAction = (dispatch) => {
    dispatch({type:"RANDOM"});
    // setTimeout(()=>{
    //     dispatch({type:"RANDOM"});
    // },1000);
    dispatch({
        type:"RANDOM", 
        payload: new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(1);
            },1000)
        })
    });
}