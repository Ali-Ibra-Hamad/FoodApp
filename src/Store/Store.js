import { configureStore } from "@reduxjs/toolkit";
import Keys from "./Keys/Keys";
import MainData from "./MainData/MainData";

const reducers = {
  Keys: Keys.reducer,
  MainData: MainData.reducer,
};
const Store = configureStore({
  reducer: reducers,
});

export default Store;
