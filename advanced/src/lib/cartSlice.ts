'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  amount: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.items.push({ ...action.payload, amount: 1 });
      }
    },
    increaseItem: (state, action: PayloadAction<string>) => {
      const itemToIncrease = state.items.find((item) => item.id === action.payload);
      if (itemToIncrease) {
        itemToIncrease.amount += 1;
      }
    },
    decreaseItem: (state, action: PayloadAction<string>) => {
      const itemToDecrease = state.items.find((item) => item.id === action.payload);
      if (itemToDecrease) {
        if (itemToDecrease.amount > 1) {
          itemToDecrease.amount -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, increaseItem, decreaseItem, removeItem } = cartSlice.actions;