import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import { baseApi } from './baseApi';
import { basePersistentApi } from './baseApi';
import subsiteHexagonReducer from '../features/SubsiteHexagons/store/subsiteHexagonSlice';
import layoutReducer from '../features/Layout/store/layoutSlice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [basePersistentApi.reducerPath]: basePersistentApi.reducer,
  subsiteHexagon: subsiteHexagonReducer,
  layout: layoutReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(baseApi.middleware)
        .concat(basePersistentApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
