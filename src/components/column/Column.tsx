import "./Column.css";
import { useDroppable } from "@dnd-kit/core";

interface ColumnProps {
  children?: React.ReactNode;
  title?: string;
  id: string;
}

function Column({ children, title, id }: ColumnProps) {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div className="column" ref={setNodeRef}>
      <div className="cardTitle">
        <p className="titleCard">{title}</p>
      </div>
      {children}
    </div>
  );
}

export default Column;
