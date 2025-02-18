import "./Card.css";
import message from "../../images/message.svg";
import heart from "../../images/heart.svg";
import clip from "../../images/clip.svg";
import Label from "../label/Label";
import { useDraggable } from "@dnd-kit/core";

interface CardProps {
  title?: string;
  content?: string;
  labelColors?: string[];
  id: string;
}

function Card({ id, content, title, labelColors = [] }: CardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  const labels = labelColors.map((labelColor) => (
    <Label color={labelColor} key={labelColor} />
  ));
  return (
    <div
      className="rectangle"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div style={{ display: "flex" }}>{labels}</div>
      <div style={{ marginTop: "20px" }}>
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="text">
          <p>{content}</p>
        </div>
        <div className="symbol">
          <img src={message} alt="message" />
          <img src={heart} alt="heart" />
          <img src={clip} alt="clip" />
        </div>
      </div>
    </div>
  );
}

export default Card;
