import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import { rootReducer } from "./rootReducer";

// ----------------------------------------------------------------------

export const store = configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(apiSlice.middleware),
});
