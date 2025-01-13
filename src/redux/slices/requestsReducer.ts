// src/redux/slices/tasksSlice.ts
import { RequestTasks } from '@/types/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface RequestsState {
    requests: RequestTasks[];
}

const initialState: RequestsState = {
    requests: [],
};

const requestsSlice = createSlice({
  name:'requests',
  initialState,
  reducers: {
    setRequest: (state, action: PayloadAction<RequestTasks[]>) => {
      state.requests = action.payload;
    },
    updateRequestStatus: (state, action: PayloadAction<{ id: string; newStatus: string }>) => {
      const { id, newStatus } = action.payload;
      const request = state.requests.find((request) => request.id === id);
      if (request) {
        request.status = newStatus;
      }
    },
  },
});

export const { setRequest, updateRequestStatus } = requestsSlice.actions;

export default requestsSlice.reducer;
