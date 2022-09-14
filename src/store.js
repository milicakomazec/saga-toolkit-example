import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import catsReducer from './catSlice'  //import as catsReducer (name)
import catSaga from './catSaga';

const saga = createSagaMiddleware();


const store = configureStore({
  reducer:{
    cats:catsReducer
  },
  middleware:[saga]
  
})
saga.run(catSaga)
export default store;