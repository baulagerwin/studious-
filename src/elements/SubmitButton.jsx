function SubmitButton({ style, children }) {
  return (
    <button className={style} type="submit">
      {children}
    </button>
  );
}

export default SubmitButton;
