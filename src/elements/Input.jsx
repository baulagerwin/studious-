function Input({
  id,
  name,
  type,
  className,
  value,
  onChange,
  onFocus,
  onBlur,
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      className={className}
      value={value}
      autoComplete="off"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

export default Input;
