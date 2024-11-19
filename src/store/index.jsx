import { configureStore } from '@reduxjs/toolkit';
import paging from './modules/pagingSlice';

export const store = configureStore({
    reducer: {
        paging,
    },
});
