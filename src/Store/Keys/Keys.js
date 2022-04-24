import { createSlice } from "@reduxjs/toolkit";

const init_state = {
  UserKey: true,
  OrderKey: false,
  FinalKey: false,
};
const keys = createSlice({
  name: "keys",
  initialState: init_state,
  reducers: {
    keyHandler(state) {
      state.UserKey = !state.UserKey;
    },
    OrderHandler(state) {
      state.OrderKey = !state.OrderKey;
    },
    FinalHandler(state) {
      state.FinalKey = !state.FinalKey;
    },
  },
});

export default keys;
