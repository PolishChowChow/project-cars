import { configureStore } from "@reduxjs/toolkit";
import { formSlice, setCost, setName,  } from "./slices/formSlice";
import { carsSlice, removeCar, changeSearchTerm } from "./slices/carSlice";

export const store = configureStore({
	reducer: {
		form: formSlice.reducer,
		cars: carsSlice.reducer,
	},
});
export {setCost, setName, removeCar, changeSearchTerm};
