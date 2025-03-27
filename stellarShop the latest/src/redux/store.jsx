import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage for persistence
import { combineReducers } from "redux";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["product", "cart"], // Persist these reducers
};

const rootReducer = combineReducers({
  product: productSlice,
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // Ignore non-serializable warnings
      },
    }),
});

export const persistor = persistStore(store);
export default store;
