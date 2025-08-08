'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  username: string;
}

const initialState: UserState = (typeof window !== 'undefined' && window.Cypress && window.initialUser) || {
  username: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username;
    },
    clearUser: (state) => {
      state.username = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;