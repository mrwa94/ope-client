// src/redux/slices/tasksSlice.ts
import { Task } from '@/types/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name:'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    updateTaskStatus: (state, action: PayloadAction<{ id: string; newStatus: string }>) => {
      const { id, newStatus } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.status = newStatus;
      }
    },
  },
});

export const { setTasks, updateTaskStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
