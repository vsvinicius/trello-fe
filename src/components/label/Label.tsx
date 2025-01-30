import "./Label.css";

interface LabelProps {
  color?: string;
}

function Label(props: LabelProps) {
  return (
    <div
      className="line"
      style={{
        backgroundColor: props.color,
      }}
    />
  );
}

export default Label;
