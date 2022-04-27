const randomReducer = (state={value:0}, action) => {
    switch(action.type){
        case 'RANDOM':
            return {...state, value: Math.ceil(Math.random()*10)};
        default:
            return {...state};
    }
}

export default randomReducer;
