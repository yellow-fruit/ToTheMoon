import { configureStore } from '@reduxjs/toolkit';
import elementsReducer from '../features/elements/elementsSlice';

export const store = configureStore({
    reducer: {
        elements: elementsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;