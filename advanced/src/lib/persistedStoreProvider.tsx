'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactNode } from 'react';
import { persistor, store } from './store';
import { UserState } from './userSlice';


declare global {
    interface Window {
        Cypress?: Cypress.Cypress;
        store?: typeof store;
        initialUser?: UserState;
    }
}

export function PersistedStoreProvider({ children }: { children: ReactNode }) {

  if (typeof window !== 'undefined' && window.Cypress) {
    window.store = store;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}