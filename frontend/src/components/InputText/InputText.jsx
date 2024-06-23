import "./InputText.css";
const InputText = ({ patata, onFunc }) => {
  return (
    <>
      <input
        className="inputTypeText"
        type="text"
        placeholder={patata}
        onChange={onFunc}
      />
    </>
  );
};

export default InputText;
