import { getDetails } from "actions/actionsNotes";
import { Loader } from "components";
import { RootState } from "models/types/state.types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  CardContainer,
  Paragraph,
  ParagraphDate,
  SubtitleCard,
  TitleCard,
} from "styles/Card/CardStyles";
import { Button } from "styles/Form/FormStyles";
import { converToDate } from "utils/converToDate";

const NoteDetails = () => {
  const navigate = useNavigate();
  const state = useSelector((state: RootState) => state);
  const { notes, detail } = state.notes;
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const filtered = notes.filter((note: any) => note.titulo === id);
    console.log(filtered);
    dispatch(getDetails(filtered));
  }, [id, notes]);

  if (Object.keys(detail).length === 0) return <Loader />;

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Button onClick={onGoBack}>Volver</Button>
      <CardContainer
        className="animate__animated animate__fadeInLeft"
        size="true"
      >
        <TitleCard>{detail[0].titulo}</TitleCard>
        <SubtitleCard>{detail[0].tipo}</SubtitleCard>
        <Paragraph>{detail[0].descripcion}</Paragraph>
        <ParagraphDate>{converToDate(detail[0].fecha)}</ParagraphDate>
      </CardContainer>
    </>
  );
};

export default NoteDetails;
