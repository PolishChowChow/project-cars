import { useDispatch, useSelector } from "react-redux";
import { setCost, setName } from "./store";
import { pushAction } from "./store/resetAction";
function CarForm(){
    const {name, cost} = useSelector((state)=>state.form);
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    const handleNameChange = (event) => {
        dispatch(setName(event.target.value))
    }
    const handleCostChange = (event) => {
        dispatch(setCost(event.target.value))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(pushAction({
            name:name,
            cost:parseFloat(cost),
        }));
    }
    return <div className="car-form panel">
        <h4 className="subtitle is-3">
            Add Car
        </h4>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input type="text" onChange={handleNameChange} value={name}/>
                </div>
                <div className="field">
                    <label className="label">Cost</label>
                    <input type="number" onChange={handleCostChange} value={cost}/>
                </div>
                <div className="field">
                    <button type="submit" className="button is-link">Submit</button>
                </div>
            </div>
        </form>
    </div>
}
export default CarForm;