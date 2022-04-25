import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  errorMessage: "",
  successMessage: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    errorHandler(state, action) {
      state.errorMessage = action.payload;
    },
    successHandler(state, action) {
      state.successMessage = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
