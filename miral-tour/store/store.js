import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
