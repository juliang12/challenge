import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NoteListContainer } from "styles/Card/CardStyles";
import { Notes, NotesList } from "models/interface/notesInterface";
import { Button } from "styles/Form/FormStyles";
import { useGet } from "hooks";
import { NoteTablesRow, Loader } from "components";
import { RootState } from "models/types/state.types";

const NoteList = ({ search, select }: any) => {
  const { getData, loading } = useGet();
  const state = useSelector((state: RootState) => state);
  const { notes } = state.notes;
  const [page, setPage] = useState(0);

  const filterData = () => {
    const filtered = notes?.filter(
      (note: Notes) =>
        note.titulo.toLowerCase().includes(search.toLowerCase()) &&
        note.tipo.toLowerCase().includes(select.tipo.toLowerCase())
    );

    return filtered.slice(page, page + 6);
  };

  const nextPage = () => {
    if (notes[page]) {
      setPage((current) => current + 6);
    }
  };

  const backPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 6);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(notes);
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button onClick={nextPage}>Next</Button>
        <Button onClick={backPage}>Back</Button>
      </div>
      {!loading ? (
        <NoteListContainer>
          {filterData()?.map((note: NotesList) => (
            <NoteTablesRow
              key={note.id}
              id={note.id}
              titulo={note.titulo}
              descripcion={note.descripcion}
              fecha={note.fecha}
              tipo={note.tipo}
              note={note}
            />
          ))}
        </NoteListContainer>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default NoteList;
