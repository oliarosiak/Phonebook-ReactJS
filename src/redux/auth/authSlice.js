import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
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
  },
});

export const authReducer = authSlice.reducer;

/**
 * 
const pandingHandler = state => {
  state.isLoading = true;
};

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: pandingHandler,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: rejectedHandler,

    [addContact.pending]: pandingHandler,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: rejectedHandler,

    [deleteContact.pending]: pandingHandler,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => {        
        return contact.id === action.payload.id;
      });
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: rejectedHandler,
  },
});

export const contactsReducer = contactsSlice.reducer;

 */
