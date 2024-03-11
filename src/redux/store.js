import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './slines/counterSlice' //Bước 5
import humanReducer from './slines/humanSline'


const store = configureStore({
  reducer: {
    counter: counterReducer,//Bước 5
    human: humanReducer, 
    
  },
});


export default store ;