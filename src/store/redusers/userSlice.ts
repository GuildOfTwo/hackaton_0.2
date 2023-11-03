import { createSlice } from "@reduxjs/toolkit"
import { userSliseState } from "../../utils/types/types"

const initialState: userSliseState = {
    user: null,
    error: '' ,
    isLoading: false,
    isAuth: false,
}

const userSlise = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

export const { } = userSlise.actions;

export default userSlise.reducer