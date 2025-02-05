import { useState } from "react";
import "./InputCard.css";

interface InputCardProps {
  onCancel: () => void;
  onAddNewCard: (title: string, description: string) => void;
}

function InputCard(props: InputCardProps) {
  const [titleCard, setTitleCard] = useState("");
  const [contentCard, setContentCard] = useState("");

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitleCard(event.target.value);
  }

  function handleContentChange(event: React.ChangeEvent<HTMLInputElement>) {
    setContentCard(event.target.value);
  }

  function handleClick() {
    props.onAddNewCard(titleCard, contentCard);
  }

  return (
    <div className="inputCard">
      <input
        type="text"
        name="Title"
        className="titleInput"
        placeholder="Title"
        onChange={handleTitleChange}
      />
      <input
        type="text"
        name="Description"
        className="description"
        placeholder="Description"
        onChange={handleContentChange}
      ></input>
      <div className="buttons">
        <button
          type="button"
          className="btnInputCard cancel"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btnInputCard addCard"
          onClick={handleClick}
        >
          Add card
        </button>
      </div>
    </div>
  );
}

export default InputCard;
