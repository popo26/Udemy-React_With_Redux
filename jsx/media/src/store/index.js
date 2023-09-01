import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';
import { fetchUsers } from './thunks/fetchUsers';

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
});

export * from './thunks/fetchUsers'; // this syntax means find everything gets exported from this directory as well as export from index.js as well.
export * from './thunks/addUser';
export * from './thunks/removeUser';