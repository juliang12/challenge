import NoteList from "components/Common/NoteList";
import SelectSearch from "components/Common/SelectSearch";

import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Button, InputText } from "styles/Form/FormStyles";
import { HeroPage } from "styles/Pages/NotesPagesStyles";

const INITIAL_SELECT = {
  tipo: "",
};

const NotesPage = () => {
  const [search, setSearch] = useState({ value: "" });
  const [select, setSelect] = useState(INITIAL_SELECT);

  const { value } = search;
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect({
      ...select,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <HeroPage>
        <div style={{ margin: "10px" }}>
          <InputText
            type="text"
            placeholder="Search..."
            name="value"
            value={value}
            onChange={handleSearch}
          />
        </div>
        <div>
          <SelectSearch handleSelect={handleSelect} select={select} />
        </div>
        <Link to="/create-note">
          <Button>Crear Nota</Button>
        </Link>
      </HeroPage>
      <NoteList search={value} select={select} />
    </>
  );
};

export default NotesPage;
