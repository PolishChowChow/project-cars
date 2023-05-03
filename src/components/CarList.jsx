import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "./store";

function CarList() {
    const dispatch = useDispatch();
	const searchTerm = useSelector(state=>state.cars.searchTerm);
	const cars = useSelector((state) => state.cars.cars.filter(car=>car.name.includes(state.cars.searchTerm.toLowerCase)));
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
		return;
	});
	
	return <div className="car-list">{listOfCars}</div>;
}
export default CarList;
