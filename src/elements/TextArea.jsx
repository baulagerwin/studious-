function TextArea({
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
    <textarea
      rows={4}
      cols={50}
      id={id}
      name={name}
      type={type}
      className={className + ` resize-none pr-1`}
      value={value}
      autoComplete="off"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

export default TextArea;
