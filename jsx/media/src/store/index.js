import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { albumsApi } from './apis/albumsApi'; //Slice is created automatically, slice in turn create reducer
import { photosApi } from './apis/photosApi'; //Slice is created automatically, slice in turn create reducer

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware);
    }
});

setupListeners(store.dispatch);

export * from './thunks/fetchUsers'; // this syntax means find everything gets exported from this directory as well as export from index.js as well.
export * from './thunks/addUser';
export * from './thunks/removeUser';
export {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation
} from './apis/albumsApi';
export {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation,
} from './apis/photosApi';