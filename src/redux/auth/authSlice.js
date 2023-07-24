import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, getCurrentUser } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  isCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },

    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },

    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogin = false;
    },
    [getCurrentUser.pending](state, _) {
      state.isCurrentUser = true;
    },
    [getCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLogin = true;
      state.isCurrentUser = false;
    },
    [getCurrentUser.rejected](state, _) {
      state.isCurrentUser = false;
    },
  },
});

export const authReducer = authSlice.reducer;