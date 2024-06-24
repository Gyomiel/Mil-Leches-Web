import "./InputText.css";
const InputText = ({ value, onFunc }) => {
  return (
    <>
      <input
        className="inputTypeText"
        type="text"
        placeholder={value}
        onChange={onFunc}
      />
    </>
  );
};

export default InputText;
