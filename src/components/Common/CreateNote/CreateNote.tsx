import { useFirestore, useForm } from "hooks";
import { RootState } from "models/types/state.types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import {
  Button,
  ContainerButton,
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
  const state = useSelector((state: RootState) => state);
  const { noteToEdit } = state.notes;
  const { handleNote, updateNote } = useFirestore();
  const navigate = useNavigate();

  const { values, errors, setValues, handleChange, handleSubmit } = useForm(
    INITIAL_FORM,
    validateNotes,
    createNote
  );

  const { titulo, tipo, descripcion } = values;

  useEffect(() => {
    if (noteToEdit) {
      setValues(noteToEdit);
    } else {
      setValues(INITIAL_FORM);
    }
  }, [noteToEdit, setValues]);

  async function createNote() {
    if (values.id === null) {
      handleNote(values);
    } else {
      updateNote(values);
    }

    navigate("/");
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <ContainerButton>
        <Link to={"/"}>
          <Button>
            <BiArrowBack style={{ fontSize: "20px" }} />
          </Button>
        </Link>
      </ContainerButton>
      {noteToEdit ? <h1>Editar una nota</h1> : <h1>Crear una Nota</h1>}

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
      {noteToEdit ? (
        <Button mode="true">Editar Nota</Button>
      ) : (
        <Button mode="true">Crear Nota</Button>
      )}
    </FormContainer>
  );
};

export default CreateNote;
