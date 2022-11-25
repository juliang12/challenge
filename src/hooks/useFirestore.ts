import {
  createNote,
  deleteData,
  setErrors,
  setNoteToEdit,
} from "actions/actionsNotes";
import { db, ref } from "config/firebaseConfig";
import { addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import useGet from "hooks/useGet";
import { Notes } from "models/interface/notesInterface";
import { RootState } from "models/types/state.types";
import { useSelector, useDispatch } from "react-redux";


const useFirestore = () => {
  const { getData } = useGet();
  const state = useSelector((state: RootState) => state);
  const { notes} = state.notes;
  const dispatch = useDispatch();

  const handleNote = async (notes: Notes) => {
    try {
      const newData = {
        titulo: notes.titulo,
        tipo: notes.tipo,
        descripcion: notes.descripcion,
        fecha: Date.now(),
      };

      await addDoc(ref, newData);
      dispatch(createNote(newData));
      getData();
    } catch (error: any) {
      dispatch(setErrors(error.message));
    }
  };

  const deleteNote = async (id: string | any) => {
    try {
      const clientDoc = doc(db, "notes", id);
      dispatch(deleteData(id));
      await deleteDoc(clientDoc);
    } catch (error: any) {
      dispatch(setErrors(error.message));
    }
  };

  const updateNote = async (note: string | any) => {
    const exist = notes.find((item: Notes) => item.id === note.id);

    try {
      if (exist) {
        const newNote = await doc(ref, note.id);
        await updateDoc(newNote, note);
        dispatch(setNoteToEdit(exist));
      
      }

    } catch (error: any) {
      dispatch(setErrors(error.message));
    }
  };

  return { deleteNote, handleNote, updateNote };
};

export default useFirestore;
