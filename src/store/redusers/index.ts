import { combineReducers } from "redux";
import UserReduser from "./userSlice"

const reducer = combineReducers({
    user: UserReduser
})

export default reducer