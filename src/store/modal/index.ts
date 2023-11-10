import { createSlice } from '@reduxjs/toolkit';

interface IData {
  type: string;
}
interface IModalState {
  isOpen: boolean;
  type: string;
}

const initialState: IModalState = {
  isOpen: false,
  type: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModalWindow(state: IModalState, action: { payload: IData; type: string }) {
      state.isOpen = true;
      state.type = action.payload.type;
    },
    closeModalWindow(state: IModalState) {
      state.isOpen = false;
    },
  },
});

export const { openModalWindow, closeModalWindow } = modalSlice.actions;

export default modalSlice.reducer;
