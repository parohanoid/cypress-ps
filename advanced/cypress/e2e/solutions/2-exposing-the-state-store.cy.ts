// In order to make this test pass you have to expose the redux store on the window object, as a property called store
// See full instructions and file listing below.
describe('exposing the state store', () => {
    it('given the store is exposed, when verifying against the state, the state is accessible', () => {
        cy.visit('/');
        cy.window()
            .its('store')
            .invoke('getState').then(state => {
                expect(state.user).is.not.null
                expect(state.cart).is.not.null
                expect(state.cart.items).has.length(0)
            })
    });

    before('Instructions', () => {
        Cypress.log({
            name: "Instructions:",
            message: "In order to make this test pass you have to expose the Redux store on the window object, as a property called *store*."
        })
    });
});

//You can replace the content of src/lib/persistedStoreProvider.tsx with the content below to make the test pass
// 'use client';

// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { ReactNode } from 'react';
// import { persistor, store } from './store';
// import { UserState } from './userSlice';

// We define additional fields on the window object
// declare global {
//     interface Window {
//         Cypress?: Cypress.Cypress;
//         store?: typeof store;
//         initialUser?: UserState;
//     }
// }

// export function PersistedStoreProvider({ children }: { children: ReactNode }) {

// We define window.store only if we are running our test with Cypress
//     if (typeof window !== 'undefined' && window.Cypress) {
//         window.store = store;
//     }

//     return (
//         <Provider store= { store } >
//         <PersistGate loading={ null } persistor = { persistor } >
//             { children }
//             </PersistGate>
//             </Provider>
//   );
// }