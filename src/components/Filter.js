import { filterChange } from "../reducers/filterReducer";
import { useDispatch } from "react-redux";

const Filter = (props) => {
    const dispatch = useDispatch()

    // change by typing in the input box
    const handleChange = (event) => {
        dispatch(filterChange(event.target.value))
    }

    return (
        <div>
            all
            <input
                type="radio"
                name="filter"
                onChange={() => dispatch(filterChange('ALL'))}
            /> <span></span>
            None
            <input
                type="radio"
                name="filter"
                onChange={() => dispatch(filterChange('NONE'))}
            />
            <span>Search </span>
            Filter
            <input
                name="filter"
                onChange={handleChange}
            /> <span></span>
        </div>
    )
}


export default Filter