import useFirestore from "hooks/useFirestore";
import { NotesList } from "models/interface/notesInterface";
import { TiDelete, TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";
import {
  CardContainer,
  HeadContainer,
  Icon,
  Paragraph,
  ParagraphDate,
  SubtitleCard,
  TitleCard,
} from "styles/Card/CardStyles";
import { converToDate } from "utils/converToDate";
import { stringLengthLimit } from "utils/stringLength";

const NoteTablesRow = ({
  id,
  titulo,
  tipo,
  descripcion,
  fecha,
  note,
}: NotesList) => {
  const { deleteNote, updateNote } = useFirestore();

  return (
    <CardContainer className="animate__animated animate__fadeIn" key={id}>
      <HeadContainer align="true">
        <Icon>
          <TiDelete onClick={() => deleteNote(id)} />
        </Icon>
        <Icon>
          <TiEdit onClick={() => updateNote(note)} />
        </Icon>
      </HeadContainer>
      <HeadContainer>
        <Link style={{ textDecoration: "none" }} to={`/${titulo}`}>
          <TitleCard>{titulo}</TitleCard>
        </Link>
      </HeadContainer>

      <SubtitleCard>{tipo}</SubtitleCard>
      <Paragraph>{stringLengthLimit(descripcion)}</Paragraph>
      <ParagraphDate>{converToDate(fecha)}</ParagraphDate>
    </CardContainer>
  );
};

export default NoteTablesRow;
