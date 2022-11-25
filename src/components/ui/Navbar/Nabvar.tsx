import { auth } from "config/firebaseConfig";
import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "styles/Form/FormStyles";
import { Navbar } from "styles/Layout/Layout";

const Nabvar = () => {
  const state: any = useSelector((state) => state);
  const { user } = state.notes;

  const disconnect = () => {
    signOut(auth);
    window.location.reload();
  };

  return (
    <Navbar>
      <div className="logo">LOGO</div>

      {!user ? (
        <Link to="/login">
          <Button>Iniciar Sesion</Button>
        </Link>
      ) : (
        <Button onClick={disconnect}>Desconectar</Button>
      )}
    </Navbar>
  );
};

export default Nabvar;
