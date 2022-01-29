const Input = ({
  type = "text",
  placeholder = "Input placeholder",
  value,
  onChange,
}) => {
  return (
    <input
      className="form-control mb-3"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
export default Input;
