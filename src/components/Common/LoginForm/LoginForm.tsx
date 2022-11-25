import { login } from "actions/actionsNotes";
import { auth } from "config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth, useForm } from "hooks";
import { RootState } from "models/types/state.types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Error,
  FormContainer,
  InputContainer,
  InputText,
  Label,
} from "styles/Form/FormStyles";
import validateLogin from "validations/validateLogin";

const initialForm = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { signIn } = useAuth();
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { values, errors, handleChange, handleSubmit } = useForm(
    initialForm,
    validateLogin,
    loginAccount
  );

  const { error } = state.notes;

  const { email, password } = values;

  async function loginAccount() {
    const user = await signIn(email, password);
    return user;
  }

  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (userAuth) => {
      dispatch(login(userAuth));
    });

    return () => {
      unSuscribe();
    };
  }, []);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>Login</h1>
      <InputContainer>
        <Label>Email</Label>
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
        <Label>Password</Label>
        <InputText
          type="password"
          placeholder="Ingrese su password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </InputContainer>
      {errors.password && <Error>{errors.password}</Error>}
      {error.length > 0 && <Error>{error}</Error>}
      <Button mode="true">Iniciar Sesion</Button>
      <Link to="/create-account">Registrarme!</Link>
    </FormContainer>
  );
};

export default LoginForm;
