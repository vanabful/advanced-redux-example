import { all, put, takeLatest, call } from 'redux-saga/effects';
import callApi from '../API';

function* fetchUsers() {
    yield takeLatest('FETCH_USER', fetchUser);
}

function* fetchUser(action) {
    try {
        const payload = yield call(callApi, `https://api.github.com/users/${action.payload}`, 'GET');
        yield put({ type: 'ADD_CARD', payload });
    }

    catch(error){
        console.log('Failure!');
    }
}


export default function* rootSaga() {
    yield all([
      fetchUser(),
      fetchUsers()
    ])
}
