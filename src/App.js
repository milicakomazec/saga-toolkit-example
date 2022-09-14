import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {getCatsFetch} from './catSlice'

function App() {
                                        //cats reducer from store 
  const cats = useSelector((state)=>state.cats.cats) 
                                              //cats property from state
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCatsFetch())
  },[dispatch])
  return (
    <div className="App">
        react saga
    </div>
  );
}

export default App;
