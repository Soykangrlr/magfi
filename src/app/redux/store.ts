import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import postsSlice from "./slice/postsSlice";
import postDetailSlice from "./slice/postDetailSlice";
import userSlice from "./slice/userSlice";
import commentsSlice from "./slice/commentsSlice";
export const store = configureStore({
  reducer: {
    postsSlice,
    postDetailSlice,
    userSlice,
    commentsSlice
  },
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;