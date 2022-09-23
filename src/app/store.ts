import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { authReducer } from "../features/auth/sliceAuth";
import counterReducer from "../features/counter/counterSlice";
import { taskReducer } from "../features/tasks/sliceTask";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    task: taskReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const persistor = persistStore(store);
