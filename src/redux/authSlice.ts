import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      console.log(JSON.stringify(state));
    },
    loginFailure: (state, action) => {
        state.email = 'email@email.com';
        state.password = 'Password';
    },
  },
});

export const { loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
