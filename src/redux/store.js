// redux/store.js

import { createStore } from 'redux';

const initialState = {
    agreementAccepted: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_AGREEMENT':
            return { ...state, agreementAccepted: !state.agreementAccepted };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
