import { createSlice } from "@reduxjs/toolkit";
import { pushAction } from "../resetAction";
export const formSlice = createSlice({
	name: "form",
	initialState: {
		name: "",
		cost: 0,
	},
	reducers: {
		setName(state, action) {
			state.name = action.payload;
		},
		setCost(state, action) {
			state.cost = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(pushAction, () => {
			return {
				name: "",
				cost: 0,
			};
		});
	},
});
export const { setName, setCost } = formSlice.actions;
