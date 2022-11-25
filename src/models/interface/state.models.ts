import { Details, Notes} from "models/interface/notesInterface";


export interface NoteState{
    user: null | string
    notes: Notes[] 
    detail: Details
    error: Object | any
    noteToEdit: Notes | null 
}