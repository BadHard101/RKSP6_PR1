import {configureStore} from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import agreementReducer from './slices/agreementSlice.jsx';
export const store = configureStore({
    reducer: {
        user: userReducer,
        agreement: agreementReducer,
    }
});