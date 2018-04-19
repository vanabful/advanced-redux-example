import { all, put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import callApi from "../API";

// fetchiing all users
function* fetchUsers() {
  try {
    const response = yield call(
      callApi,
      "http://localhost:3000/users",
      "get",
      undefined
    );
    yield put({ type: "FETCH_USER_SUCCESS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

// adding users to database
function* addUser(action) {
  try {
    const response = yield call(
      callApi,
      `https://api.github.com/users/${action.payload}`,
      "get",
      undefined
    );
    const user = {
      id: response.data.id,
      name: response.data.name,
      avatar_url: response.data.avatar_url,
      company: response.data.company
    };
    const result = yield call(axios.post, "http://localhost:3000/users", user);
    yield put({ type: "ADD_USER_SUCCESS", payload: user });
  } catch (error) {
    console.log(error);
  }
}

// deleting users from database
function* deleteUser(action) {
  try {
    const response = yield call(
      callApi,
      `http://localhost:3000/users/${action.payload}`,
      "delete",
      undefined
    );
    yield put({ type: "DELETE_USER_SUCCESS", payload: action.payload });
  } catch (error) {
    console.log(error);
  }
}

// updating user data
function* updateUser(action) {
  try {
    const response = yield call(
      callApi,
      `http://localhost:3000/users/${action.payload.id}`,
      "put",
      action.payload
    );
    yield put({ type: "UPDATE_USER_SUCCESS", payload: action.payload });
  } catch (error) {
    console.log(error);
  }
}

function* watchAddingUsers() {
  yield takeEvery("ADD_USER", addUser);
}

function* watchDeletingUsers() {
  yield takeEvery("DELETE_USER", deleteUser);
}

function* watchUserUpdate() {
  yield takeEvery("UPDATE_USER", updateUser);
}

export default function* rootSaga() {
  yield all([
    fetchUsers(),
    watchAddingUsers(),
    watchDeletingUsers(),
    watchUserUpdate()
  ]);
}
