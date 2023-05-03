import { createSlice, nanoid } from "@reduxjs/toolkit";
import { pushAction } from "../resetAction";

export const carsSlice = createSlice({
	name: "cars",
	initialState: {
		searchTerm: "",
		cars: [],
	},
	reducers: {
		changeSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},
		removeCar(state, action) {
			state.cars = state.cars.filter((car) => car.id !== action.payload)
		},
	},
	extraReducers:(builder)=>{
		builder.addCase(pushAction,(state,action)=>{
			state.cars.push({
				id:nanoid(),
				name:action.payload.name,
				cost:action.payload.cost,
			});
		})
	}
});
export const { changeSearchTerm, removeCar } = carsSlice.actions;
