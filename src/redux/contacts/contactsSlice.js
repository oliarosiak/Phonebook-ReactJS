import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/authOperation';
import { fetchContacts, addContact, deleteContact } from './contactOperation';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

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
    [addContact.pending]: pandingHandler,
    [deleteContact.pending]: pandingHandler,

    [fetchContacts.rejected]: rejectedHandler,
    [addContact.rejected]: rejectedHandler,
    [deleteContact.rejected]: rejectedHandler,

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => {
        return contact.id === action.payload.id;
      });
      state.items.splice(index, 1);
    },

    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
