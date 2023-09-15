import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

// export interface CounterState {
//   value: number;
// }

const initialState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

// export default counterActions.reducer;
