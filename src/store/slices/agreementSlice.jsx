import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    agreementAccepted: false
};

const agreementSlice = createSlice({
    name: 'agreement',
    initialState,
    reducers: {
        toggleAgreement: (state) => {
            state.agreementAccepted = !state.agreementAccepted;
        },
    },
});

export const {toggleAgreement} = agreementSlice.actions;
export default agreementSlice.reducer;