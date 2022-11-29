function Placeholder({ className, text, error = "" }) {
  return <span className={className}>{error ? error : text}</span>;
}

export default Placeholder;
