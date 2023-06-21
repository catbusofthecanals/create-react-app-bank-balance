import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  //name of the slice of state implemented in the store
  name: "counter",
  //set initial counter for bank balance to 0
  initialState: {
    value: 0,
  },
  reducers: {
    //add user input deposit to current state to increase balance
    depositByAmount: (state, action) => {
      state.value += action.payload;
    },
    //minus user input withdrawel to current state to decrease balance
    withdrawByAmount: (state, action) => {
      state.value -= action.payload;
    },
    //multiply current state by 5% to add interest
    addInterest: (state) => {
      state.value *= 1.05;
    },
    //divide current state by 15% to add charges
    addCharges: (state) => {
      state.value /= 1.15;
    },
  },
});

//action creators are generated for each case reducer function
export const { depositByAmount, withdrawByAmount, addInterest, addCharges } =
  counterSlice.actions;

export default counterSlice.reducer;
