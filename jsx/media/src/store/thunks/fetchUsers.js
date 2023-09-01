import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');

    //DEV ONLY!!
    await pause(2000);

    return response.data; // whatever we receive here will be automaticallly payload of 'fulfilled' action type
});

//DEV ONLY!! - helper function

const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
}



export { fetchUsers };

//below are automatically added in by Redux Toolkit
// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.fulfilled === 'users/fetch/fulfilled'
// fetchUsers.rejected === 'users/fetch/rejected'


