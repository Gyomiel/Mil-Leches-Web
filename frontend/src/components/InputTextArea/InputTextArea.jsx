import "./InputTextArea.css";

function InputTextArea({ value, onFunc }) {
  return (
    <textarea
      className="textArea"
      placeholder={value}
      onChange={onFunc}
      required
    ></textarea>
  );
}

export default InputTextArea