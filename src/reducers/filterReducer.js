import { createSlice } from '@reduxjs/toolkit'


const initialState = 'ALL'

// const filterReducer = (state = 'ALL', action) => {
//     switch (action.type) {
//         case 'SET_FILTER':
//             return action.payload
//         default:
//             return state

//     }
// }


// //action creator function for filterReducer usage
// export const filterChange = (myFilter) => {
//     return {
//         type: 'SET_FILTER',
//         payload: myFilter
//     }
// }


const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filterChange(state, action) {
            // ;;;
            return action.payload
        }
    }
})



// export default filterReducer
export default filterSlice.reducer
export const { filterChange } = filterSlice.actions