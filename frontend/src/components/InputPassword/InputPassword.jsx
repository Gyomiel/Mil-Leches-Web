import "./InputPassword.css";

function InputPassword({ value, onFunc }) {
  return (
    <input
      className="inputTypePass"
      type="password"
      placeholder={value}
      onChange={onFunc}
    />
  );
}

export default InputPassword;
