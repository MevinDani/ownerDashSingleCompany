import { configureStore } from '@reduxjs/toolkit';
import  empReducer from '../features/Emp/EmpSlice';



export const store = configureStore({
  reducer: {
    emp:empReducer,
    
   

  },
});