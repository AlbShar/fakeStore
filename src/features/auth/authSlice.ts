import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  isAuth: boolean | null;
};

const initialState: TInitialState = {
  isAuth: null,
};

const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    userIsAuth(state) {
      state.isAuth = true;
    },
    userIsNotAuth(state) {
      state.isAuth = false;
    },
    isAuthDefaultValue(state) {
      state.isAuth = null;
    },
  },
});

export const { userIsAuth, userIsNotAuth, isAuthDefaultValue } =
  authUserSlice.actions;
export const { reducer } = authUserSlice;
