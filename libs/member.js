import { createSlice } from '@reduxjs/toolkit'
export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    modal :false,
    checkcustomer:'',
    customerform :'',
  },
  reducers: {

    customercheck:(state,action)=>{
      state.checkcustomer = action.payload;
      if(state.checkcustomer=='none'){
        state.customerform = 'none';
      }
      else{
        state.customerform = 'new';
      }
    },
  },
})

export const {
  customercheck
} = todoSlice.actions

export const customerform = (state) => state.customerform

export default todoSlice.reducer;