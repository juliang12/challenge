import { NoteState } from "models/interface/state.models";

export const initialState: NoteState = {
    user: null,
    notes: [],
    detail: {},
    error: [],
    noteToEdit: null
}