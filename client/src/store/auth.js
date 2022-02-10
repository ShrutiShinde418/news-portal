import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  errorMessage: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    errorHandler(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
