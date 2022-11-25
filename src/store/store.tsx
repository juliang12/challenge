import { notesReducer } from "reducers/Notes/notesReducer";
import { legacy_createStore, combineReducers } from "redux";

export interface AppStore {
  notes: any;
}

const reducers = combineReducers<AppStore>({
  notes: notesReducer,
});

export const store = legacy_createStore(reducers);
