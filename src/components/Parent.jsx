import { Component } from "react";

class Parent extends Component {
  state = {
    isFocus: false,
    value: "",
    error: "",
  };

  getBoxStyle = () => {
    if (this.state.isFocus && this.state.error)
      return `bg-gray-100 rounded-md p-2 relative border-2 border-red-600 bg-white outline outline-gray-200`;
    if (this.state.isFocus)
      return `bg-gray-100 rounded-md p-2 relative border-2 border-second bg-white outline outline-gray-200`;
    return `bg-gray-100 rounded-md p-2 relative border-2 border-transparent outline outline-transparent`;
  };

  getInputStyle = () => {
    if (this.state.isFocus) return "text-xl p-2 outline-none bg-white w-full";
    return "text-xl p-2 outline-none bg-gray-100 w-full";
  };

  getPlaceHolderStyle = () => {
    if (this.state.isFocus && this.state.error)
      return "text-md text-red-600 font-semibold bg-white p-1 absolute top-50 -translate-y-7 left-0 translate-x-2 pointer-events-none transition-all duration-250";
    if (this.state.isFocus)
      return "text-md text-second font-semibold bg-white p-1 absolute top-50 -translate-y-7 left-0 translate-x-2 pointer-events-none transition-all duration-250";
    return "text-xl absolute top-50 translate-y-2 left-0 translate-x-6 pointer-events-none transition-all duration-250";
  };

  handleOnFocus = () => {
    const state = { ...this.state };
    state.isFocus = true;

    this.setState(state);
  };

  handleOnBlur = () => {
    if (this.state.value) return;

    const state = { ...this.state };
    state.isFocus = false;
    state.error = "";

    this.setState(state);
  };
}

export default Parent;
