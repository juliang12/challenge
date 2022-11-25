import { setErrors } from "actions/actionsNotes";
import { auth } from "config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import useForm from "hooks/useForm";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Error,
  FormContainer,
  InputContainer,
  InputText,
} from "styles/Form/FormStyles";
import validateCreateAccount from "validations/validateCreateAccount";

const INITIAL_ACCOUNT = {
  name: "",
  email: "",
  password: "",
};

const CreateAccountForm = () => {
  const dispatch = useDispatch();
  const { values, errors, handleChange, handleSubmit } = useForm(
    INITIAL_ACCOUNT,
    validateCreateAccount,
    createAccount
  );

  const { name, email, password } = values;

  async function createAccount() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      dispatch(setErrors(error.message));
    }
    alert("Usuario creado");
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <InputText
          type="text"
          placeholder="Ingrese su username"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </InputContainer>
      {errors.name && <Error>{errors.name}</Error>}
      <InputContainer>
        <InputText
          type="text"
          placeholder="Ingrese su Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </InputContainer>
      {errors.email && <Error>{errors.email}</Error>}
      <InputContainer>
        <InputText
          type="password"
          placeholder="Ingrese su password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </InputContainer>
      {errors.password && <Error>{errors.password}</Error>}
      <Button mode="true">Crear Cuenta</Button>
      <Link to="/login">Iniciar Sesion</Link>
    </FormContainer>
  );
};

export default CreateAccountForm;
