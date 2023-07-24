import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectItems, selectFilter],
  (allContacts, filterValue) => {
    const filteredContacts = allContacts.filter(contact => {
      const filterLower = filterValue.toLowerCase();
      const contactNameLower = contact.name.toLowerCase();

      return contactNameLower.includes(filterLower);
    });

    return filteredContacts;
  }
);