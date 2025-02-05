import { useState } from "react";
import "./EmptyCard.css";
import InputCard from "../input-card/InputCard";

interface EmptyProps {
  onAddNewCard: (title: string, description: string) => void;
}
function Empty(props: EmptyProps) {
  const [showInputCard, setshowInputCard] = useState(false);
  function openInputCard() {
    setshowInputCard(true);
  }
  function cancelInputCard() {
    setshowInputCard(false);
  }
  if (showInputCard === true) {
    return (
      <InputCard onCancel={cancelInputCard} onAddNewCard={props.onAddNewCard} />
    );
  }

  return (
    <div>
      <button type="button" className="button" onClick={openInputCard}>
        + Add new card
      </button>
    </div>
  );
}

export default Empty;
