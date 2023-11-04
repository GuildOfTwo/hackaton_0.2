import { configureStore } from "@reduxjs/toolkit"
import UserReduser from "./user/userSlice"
import { combineReducers } from "redux";

enum ReducerName {
    User = 'user',
}

const rootReducer = combineReducers({
    [ReducerName.User]: UserReduser
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store