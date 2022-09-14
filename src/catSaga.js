import { getCatsSuccess } from './catSlice';
import {call,put, takeEvery} from 'redux-saga/effects'

//call - call url and apis
//put - call actions
//takeEvery - watch a action and triger function when that action is being called

function* getCatsFetch(){
    const cats = yield call(()=>fetch('https://api.thecatapi.com/v1/breeds')) //yield similar to async/await
    const formattedCats = yield cats.json();
    const formattedCatsShortened = formattedCats.slice(0,10); //take first 10
    yield put(getCatsSuccess(formattedCatsShortened))
}

function* catSaga() {
    yield takeEvery('cats/getCatsFetch',getCatsFetch)

    //takeEvery('nameOfReducer/nameOfCase')
}

export default catSaga