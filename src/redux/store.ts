// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksReducer';
import requestsReducer from './slices/requestsReducer';

const store = configureStore({
  reducer: {
    tasks: tasksReducer, 
    requests: requestsReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;


export default store;
