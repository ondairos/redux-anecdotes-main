const filterReducer = (state = 'ALL', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload
        default:
            return state
    }
}


//action creator function for filterReducer usage
export const filterChange = (myFilter) =>{
    return {
        type: 'SET_FILTER',
        payload: myFilter
    }
}



export default filterReducer