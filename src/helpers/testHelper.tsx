import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import type { AppStore, RootState } from '../store/store';
import { baseApi, basePersistentApi } from '../store/baseApi';
import subsiteHexagonReducer from '../features/SubsiteHexagons/store/subsiteHexagonSlice';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [basePersistentApi.reducerPath]: basePersistentApi.reducer,
  subsiteHexagon: subsiteHexagonReducer,
});

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
  includeRouterWrapper = false
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    if (includeRouterWrapper) {
      return (
        <Provider store={store}>
          <BrowserRouter>{children}</BrowserRouter>
        </Provider>
      );
    } else {
      return <Provider store={store}>{children}</Provider>;
    }
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
