import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "Ширахунов Абду-Алим", age: 20 },
    { id: 2, name: "Рафиев Рахат", age: 20 },
    { id: 3, name: "Дин Винчестер", age: 41 }
  ]
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    }
  }
});

export const { addUser } = dataSlice.actions;
export default dataSlice.reducer;