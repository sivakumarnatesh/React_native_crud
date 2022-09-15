import { configureStore } from '@reduxjs/toolkit';
import loggedUser from './Reducer';

export default configureStore({
    reducer: {
        users: loggedUser,
    },
});
