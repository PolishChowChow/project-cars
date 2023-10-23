import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "./store";

function CarList() {
    const dispatch = useDispatch();
	const searchTerm = useSelector(state=>state.cars.searchTerm);
	const cars = useSelector(searchTerm  !== "" ? ((state) => state.cars.cars.filter(car=>car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase()))) : ((state) => state.cars.cars));
    const handleCarDelete = (id) =>{
        dispatch(removeCar(id));
    }
	const listOfCars = cars.map((car) => {
			const isBold = car.name === searchTerm ? "bold" : "";
			return (
				<div key={car.id} className={`panel ${isBold}`}>
					<p>
						{car.name} - ${car.cost}
					</p>
					<button
						className="button is-danger"
						onClick={() => handleCarDelete(car.id)}>
						Delete
					</button>
				</div>
			);
	});
	
	return <div className="car-list">{listOfCars}</div>;
}
export default CarList;
