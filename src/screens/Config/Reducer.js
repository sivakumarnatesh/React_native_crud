import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        userId: '',
        id: '',
        title: '',
        body: '',
        userData: []
    },
    reducers: {
        storeUserData: (state, action) => {
            state.userData = action.payload;
        }
    }
});

export const { storeUserData } = userSlice.actions;

export default userSlice.reducer;