const counterReducer = (state={value:1}, action) =>{
    switch (action.type) {
        case 'INCR':
            return {...state, value:state.value+ 1};
        default:
            return {...state};
    }
}
export default counterReducer;