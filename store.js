import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './libs/member';

export default configureStore({
  reducer: {
    todos: todoReducer,
    
  },
});

