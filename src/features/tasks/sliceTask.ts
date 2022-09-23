import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Item } from "./task.type";
import taskApi from "./taskApi";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

export type TaskState = {
  items: Item[] | null;
};

const initialState: TaskState = {
  items: null,
};

export const getListTask = createAsyncThunk(
  "api/tasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await taskApi.getListTask();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListTask.pending, (state) => {
      state.items = null;
    });
    builder.addCase(getListTask.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(getListTask.rejected, (state) => {
      state.items = null;
    });
  },
});

const taskConfig = {
  key: "task",
  storage,
};

export const listTask = (state: RootState) => state.task.items;

export const taskReducer = persistReducer(taskConfig, taskSlice.reducer);
