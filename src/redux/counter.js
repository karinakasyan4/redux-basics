import { createSlice } from '@reduxjs/toolkit';



const initialState: CounterState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
        state.count += 1
    },
        decrement: (state) => {
        state.count -= 1
    },
        incrementByAmount: (state, action) => {
        state.count += action.payload
      },
      decrementByAmount: (state, action) => {
        state.count -= action.payload
      },
      incrementByAmountThree: (state, action) => {
        state.count *= action.payload
      },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount, incrementByAmountThree } = counterSlice.actions

export default counterSlice.reducer