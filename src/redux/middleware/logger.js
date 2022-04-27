const loggerMiddleWare = store => {
    return (next) => {
        return (action) => {
            console.log("action: ", action, "State:", store.getState());
            next(action);
        }
}
}

export default loggerMiddleWare