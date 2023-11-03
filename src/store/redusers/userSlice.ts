import { createSlice } from "@reduxjs/toolkit"
import { userSliceState } from "../../utils/types/types"

const initialState: userSliceState = {
    user: null,
    error: '' ,
    isLoading: false,
    isAuth: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

export const { } = userSlice.actions;

export default userSlice.reducer