import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';

// export interface CounterState {
//   value: number;
// }

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUsername.pending, (state, action) => {})
  //     .addCase(loginByUsername.fulfilled, (state, action) => {})
  //     .addCase(loginByUsername.rejected, (state, action) => {});
  // },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;

// export default counterActions.reducer;
