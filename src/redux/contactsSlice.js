import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operation';

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
