import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import AuthSlice from "./AuthSlice";
import UiSlice from "./UiSlice";

const store=configureStore({
    reducer:{Cart:CartSlice,Auth:AuthSlice,Ui:UiSlice}
});

export default store;