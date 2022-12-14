import { Component } from "react";
import Input from "../../elements/Input";
import Label from "../../elements/Label";
import Placeholder from "../../elements/Placeholder";

class TextBox extends Component {
  state = {
    isFocus: this.props.value ? true : false,
  };

  getBoxStyle = () => {
    const { isFocus } = this.state;
    const { error } = this.props;

    if (isFocus && error)
      return `bg-white rounded-md p-2 relative border-2 border-red-600 outline outline-gray-200 animation-shake`;
    if (isFocus)
      return `bg-white rounded-md p-2 relative border-2 border-second outline outline-gray-200`;
    return `bg-gray-100 rounded-md p-2 relative border-2 border-transparent outline outline-transparent`;
  };

  getInputStyle = () => {
    const { isFocus } = this.state;

    if (isFocus) return "p-1 pr-9 outline-none bg-white w-full";
    return "p-1 pr-9 outline-none bg-gray-100 w-full";
  };

  getPlaceHolderStyle = () => {
    const { isFocus } = this.state;
    const { error } = this.props;

    if (isFocus && error)
      return "text-md text-red-600 font-semibold bg-white px-1 absolute top-50 -translate-y-6 left-0 translate-x-2 pointer-events-none transition-all duration-250";
    if (isFocus)
      return "text-md text-second font-semibold bg-white px-1 absolute top-50 -translate-y-6 left-0 translate-x-2 pointer-events-none transition-all duration-250";
    return "text-md absolute top-50 translate-y-1 left-0 translate-x-4 pointer-events-none transition-all duration-250";
  };

  getLabelStyle = () => {
    const { error } = this.props;

    if (error)
      return "absolute top-1/2 right-0 -translate-y-1/2 -translate-x-3 text-red-600";

    return "absolute top-1/2 right-0 -translate-y-1/2 -translate-x-3";
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
    const { id, name, text, type, value, onChange, icon } = this.props;

    return (
      <div className={this.getBoxStyle()}>
        <Input
          id={id}
          name={name}
          type={type}
          className={this.getInputStyle()}
          value={value}
          onChange={onChange}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
        />
        <Placeholder className={this.getPlaceHolderStyle()} text={text} />
        <Label id={id} className={this.getLabelStyle()} icon={icon} />
      </div>
    );
  }
}

export default TextBox;
