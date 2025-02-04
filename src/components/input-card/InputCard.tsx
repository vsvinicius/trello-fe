import "./InputCard.css";

interface InputCardProps {
  onCancel: () => void;
}

function InputCard(props: InputCardProps) {
  return (
    <div className="inputCard">
      <input
        type="text"
        name="Title"
        className="titleInput"
        placeholder="Title"
      />
      <input
        type="text"
        name="Description"
        className="description"
        placeholder="Description"
      ></input>
      <div className="buttons">
        <button
          type="button"
          className="btnInputCard cancel"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button type="button" className="btnInputCard addCard">
          Add card
        </button>
      </div>
    </div>
  );
}

export default InputCard;
