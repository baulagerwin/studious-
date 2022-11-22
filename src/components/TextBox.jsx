import { Component } from "react";

class TextBox extends Component {
  state = {
    isFocus: false,
  };

  getBoxStyle = () => {
    const { isFocus } = this.state;
    const { error } = this.props;

    if (isFocus && error)
      return `bg-gray-100 rounded-md p-2 relative border-2 border-red-600 bg-white outline outline-gray-200 animation-shake`;
    if (isFocus)
      return `bg-gray-100 rounded-md p-2 relative border-2 border-second bg-white outline outline-gray-200`;
    return `bg-gray-100 rounded-md p-2 relative border-2 border-transparent outline outline-transparent`;
  };

  getInputStyle = () => {
    const { isFocus } = this.state;

    if (isFocus) return "text-xl p-2 outline-none bg-white w-full";
    return "text-xl p-2 outline-none bg-gray-100 w-full";
  };

  getPlaceHolderStyle = () => {
    const { isFocus } = this.state;
    const { error } = this.props;

    if (isFocus && error)
      return "text-md text-red-600 font-semibold bg-white  p-1 absolute top-50 -translate-y-7 left-0 translate-x-2 pointer-events-none transition-all duration-250";
    if (isFocus)
      return "text-md text-second font-semibold bg-white p-1 absolute top-50 -translate-y-7 left-0 translate-x-2 pointer-events-none transition-all duration-250";
    return "text-xl absolute top-50 translate-y-2 left-0 translate-x-6 pointer-events-none transition-all duration-250";
  };

  handleOnFocus = () => {
    const state = { ...this.state };
    state.isFocus = true;

    this.setState(state);
  };

  handleOnBlur = () => {
    const { value } = this.props;

    if (value) return;

    const state = { ...this.state };
    state.isFocus = false;

    this.setState(state);
  };

  render() {
    const { name, text, type, value, onChange, icon } = this.props;

    return (
      <div className={this.getBoxStyle()}>
        <input
          id={name}
          name={name}
          type={type}
          className={this.getInputStyle()}
          value={value}
          autoComplete="off"
          onChange={onChange}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
        />
        <span className={this.getPlaceHolderStyle()}>{text}</span>
        <label
          htmlFor={name}
          className="absolute top-50 left-100 translate-y-3 -translate-x-7"
        >
          {icon}
        </label>
      </div>
    );
  }
}

export default TextBox;
