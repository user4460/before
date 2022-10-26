
import { combineReducers, createStore } from "redux";

export const rootReducer = combineReducers({
  //ここに各stateのreducerを設定
});
export const store = createStore(rootReducer);
export type StoreState = ReturnType<typeof store.getState>;
