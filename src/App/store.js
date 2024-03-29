import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/tasks/taskSlice'; // Recibe reducers de task

const store = configureStore({
  reducer: {
    task: taskReducer
  },
})

export default store;