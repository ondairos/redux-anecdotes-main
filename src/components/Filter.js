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
            />
            None
            <input
                type="radio"
                name="filter"
                onChange={() => dispatch(filterChange('NONE'))}
            />
            Filter
            <input
                name="filter"
                onChange={handleChange}
            />
        </div>
    )
}


export default Filter