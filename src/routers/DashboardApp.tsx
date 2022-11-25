import { CreateNote } from "components";
import { NoteDetails, NotesPage } from "pages";
import { Route, Routes } from "react-router-dom";

const DashboardApp = () => {
  return (
    <Routes>
      <Route path="/" element={<NotesPage />} />
      <Route path="/create-note" element={<CreateNote />} />
      <Route path="/:id" element={<NoteDetails />} />
    </Routes>
  );
};

export default DashboardApp;
