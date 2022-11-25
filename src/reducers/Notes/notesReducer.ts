import { Notes, NotesList } from "models/interface/notesInterface";
import { initialState } from "reducers/Notes/initialState";
import { CREATE_NOTE, DELETE_NOTE, GET_DATA, LOGIN_AUTH, NOTE_DETAILS, NOTE_TO_EDIT, SET_ERRORS} from "types/types";

type stateAction = 
| {type: "LOGIN_AUTH", payload: boolean}
| {type: "CREATE_NOTE", payload: Notes}
| {type: "GET_DATA", payload: any}
| {type: "DELETE_NOTE", payload: any}
|{type: "NOTE_DETAILS", payload: Notes}
|{type: "SET_ERRORS", payload: any}
|{type: "NOTE_TO_EDIT", payload: Notes}


export const notesReducer = (state = initialState, action:stateAction)=>{
switch (action.type) {
    case LOGIN_AUTH:{
        return{
            ...state,
            user: action.payload
        }
    }
    case GET_DATA:{
        const newState = action.payload;
        return{
            ...state,
            notes: newState?.map((doc:any) => ({...doc.data(), id: doc.id}))
        }
    }

    case CREATE_NOTE:{
        return{
            ...state,
            notes: [...state.notes, action.payload]
        }
    }
    case DELETE_NOTE:{
        return {
            ...state,
            notes: state.notes.filter((note: Notes) => note.id !== action.payload)
        }
    }

    case NOTE_DETAILS:{

        return{
            ...state,
            detail: action.payload
        }
    }

    case SET_ERRORS:{
        return{
            ...state,
            error: action.payload
        }
    }
    case NOTE_TO_EDIT:{
        return{
            ...state,
            noteToEdit: action.payload
        }
    }
   
    
    default:
        return state;
}
}