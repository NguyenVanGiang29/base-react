import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import authApi from "./apiAuth";

export type AuthState = {
  id: string;
  username: string;
  token: string;
  role: string;
};

const initialState: AuthState = {
  id: "",
  username: "",
  token: "",
  role: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await authApi.loginApi(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.token = "";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { id, username, token, role } = action.payload;
      state.token = token;
      state.id = id;
      state.role = role;
      state.username = username;
    });
    builder.addCase(login.rejected, (state) => {
      state.token = "";
    });
  },
});

export const selectToken = (state: RootState) => state.auth.token;

export const authReducer = authSlice.reducer;
