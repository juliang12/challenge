import useForm from "hooks/useForm";
import React, { useState } from "react";
import { InputText } from "styles/Form/FormStyles";

const Search = () => {
  const [search, setSearch] = useState({ value: "" });

  const { value } = search;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <InputText
        type="search"
        name="value"
        placeholder="Buscar..."
        value={value}
        onChange={handleSearch}
      />
    </>
  );
};

export default Search;
