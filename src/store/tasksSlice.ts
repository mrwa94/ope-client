import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: string;
  status: string;
  name: string;
  description: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [], // البيانات الأولية
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    updateTaskStatus: (state, action: PayloadAction<{ id: string; newStatus: string }>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.status = action.payload.newStatus;
      }
    },
  },
});

export const { setTasks, updateTaskStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
