import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface ElementState {
    elements: string[];
}

const initialState: ElementState = {
    elements: [],
};

export const elementsSlice = createSlice({
    name: 'elements',
    initialState,
    reducers: {
        addElement: (state) => {
            const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            state.elements.unshift(color);
        },
        removeElement: (state) => {
            state.elements.pop();
        },
    },
});

export const { addElement, removeElement } = elementsSlice.actions;

export const selectElements = (state: RootState) => state.elements.elements;

export default elementsSlice.reducer;