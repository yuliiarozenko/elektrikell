import { createAction, createReducer, configureStore, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_ACTIVE_BUTTON } from '../Head/constants';
import { getDefaultFrom, getDefaultUntil } from '../utlis/dates';

const initialState = {
    activePrice: DEFAULT_ACTIVE_BUTTON,
    activeHour: 1,
    errorMessage: null,
};

const initialDateState = {
    from: getDefaultFrom(),
    until: getDefaultUntil()
}

export const setActivePrice = createAction('setActivePrice');
export const setActiveHour = createAction('setActiveHour');
export const setErrorMessage = createAction('setErrorMessage');

const main = createReducer(initialState, (builder) => {
    builder
        .addCase(setActivePrice, (state, action) => {
            state.activePrice = action.payload;
        })
        .addCase(setActiveHour, (state, action) => {
            state.activeHour = action.payload;
        })
        .addCase(setErrorMessage, (state, action) => {
            state.errorMessage = action.payload;
        });
});

const datesSlice = createSlice({
    name: 'date',
    initialState: initialDateState,
    reducers: {
        setFrom: (state, action) => {
            state.from = action.payload;
        },
        setUntil: (state, action) => {
            state.until = action.payload;
        },
    },
});

export const { setFrom, setUntil } = datesSlice.actions;

export const store = configureStore({
    reducer: { main, date: datesSlice.reducer },
});
