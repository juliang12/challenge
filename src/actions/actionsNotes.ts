import { Notes, NotesList } from "models/interface/notesInterface";
import { CREATE_NOTE, DELETE_NOTE, GET_DATA, LOGIN_AUTH, NOTE_DETAILS, NOTE_TO_EDIT, SET_ERRORS } from "types/types";

export const login = (auth: Object | any)=> ({type: LOGIN_AUTH, payload: auth})
export const getNotes = (data:Notes[] | any) => ({type: GET_DATA, payload: data})
export const deleteData = (id:string)=> ({type: DELETE_NOTE, payload: id})
export const createNote = (note: Notes)=> ({type: CREATE_NOTE, payload: note})
export const getDetails = (note: Notes)=>({type: NOTE_DETAILS, payload: note})
export const setErrors = (error: Object)=>({type: SET_ERRORS, payload: error})
export const setNoteToEdit = (note:Notes)=> ({type: NOTE_TO_EDIT, payload: note})
