import { useFirestore, useForm } from "hooks";
import { RootState } from "models/types/state.types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Error,
  FormContainer,
  InputContainer,
  InputText,
  SelectSearchStyle,
  TextArea,
} from "styles/Form/FormStyles";
import validateNotes from "validations/validateNotes";

const INITIAL_FORM = {
  titulo: "",
  tipo: "",
  descripcion: "",
  id: null,
};
const CreateNote = () => {
  const navigate = useNavigate();
  const state = useSelector((state: RootState) => state);
  const { noteToEdit } = state.notes;
  const { handleNote, updateNote } = useFirestore();

  const { values, errors, setValues, handleChange, handleSubmit, reset } =
    useForm(INITIAL_FORM, validateNotes, createNote);

  const { titulo, tipo, descripcion } = values;

  async function createNote() {
    if (!noteToEdit) {
      handleNote(values);
    } else {
      updateNote(values);
    }
    navigate("/");
    reset();
  }

  useEffect(() => {
    if (noteToEdit) {
      setValues(noteToEdit);
    } else {
      setValues(INITIAL_FORM);
    }
  }, [noteToEdit, setValues]);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>Crea una Nota</h1>
      <InputContainer>
        <InputText
          type="text"
          placeholder="Ingrese un titulo"
          value={titulo}
          name="titulo"
          onChange={handleChange}
        />
      </InputContainer>
      {errors.titulo && <Error>{errors.titulo}</Error>}
      <InputContainer>
        <SelectSearchStyle value={tipo} name="tipo" onChange={handleChange}>
          <option>Tareas de casa</option>
          <option>Tareas del trabajo</option>
          <option>Ideas nuevas</option>
          <option>Diario personal</option>
        </SelectSearchStyle>
      </InputContainer>
      {errors.tipo && <Error>{errors.tipo}</Error>}

      <InputContainer>
        <TextArea
          placeholder="Descripcion..."
          name="descripcion"
          value={descripcion}
          onChange={handleChange}
        />
      </InputContainer>
      {errors.descripcion && <Error>{descripcion.titulo}</Error>}

      <Button mode="true">Crear Nota</Button>
    </FormContainer>
  );
};

export default CreateNote;
