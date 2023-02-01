import { filterChange } from "../reducers/filterReducer";
import { useDispatch } from "react-redux";

const Filter = (props) => {
    const dispatch = useDispatch()

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
        </div>
    )
}


export default Filter