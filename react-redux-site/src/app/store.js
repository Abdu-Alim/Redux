import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import dataReducer from '../features/data/dataSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        data: dataReducer
    }
})


