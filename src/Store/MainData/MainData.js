import { createSlice } from "@reduxjs/toolkit";

const init_state = {
  order: [],
  user: {},
};
const MainData = createSlice({
  name: "MainData",
  initialState: init_state,
  reducers: {
    OrderHandler(state, action) {
      state.order = action.payload;
    },
    UserrHandler(state, action) {
      state.user = action.payload;
    },
  },
});

export default MainData;
