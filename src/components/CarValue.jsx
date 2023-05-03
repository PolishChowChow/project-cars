import { useSelector } from "react-redux";

function CarValue(){
    let total=0;
    useSelector((state) => state.cars.cars.filter(car=>{
        if(car.name.includes(state.cars.searchTerm.toLowerCase())){
            total += car.cost
        }
        return;
    }))
    return <div className="car-value">
        {total}
    </div>
}
export default CarValue;