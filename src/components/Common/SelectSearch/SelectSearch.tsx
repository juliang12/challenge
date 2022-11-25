import { SelectSearchStyle } from "styles/Form/FormStyles";

const SelectSearch = ({ handleSelect, select }: any) => {
  return (
    <>
      <SelectSearchStyle
        name="tipo"
        value={select.tipo}
        onChange={handleSelect}
      >
        <option>Tareas de casa</option>
        <option>Tareas del trabajo</option>
        <option>Ideas nuevas</option>
        <option>Diario personal</option>
      </SelectSearchStyle>
    </>
  );
};

export default SelectSearch;
