import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const url = "https://randomuser.me/api/?results=5";

export const getUserData = createAsyncThunk("cart/getUserData", async () => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getUserData.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserData.fulfilled]: (state, action) => {
      //   console.log(action);
      state.isLoading = false;
      state.users = action.payload;
    },
    [getUserData.rejected]: (state) => {
      //   console.log(action);
      state.isLoading = false;
    },
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
