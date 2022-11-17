import Joi from "joi";
import React, { createRef } from "react";
import TextBox from "./TextBox";

class Password extends TextBox {
  debounceID = createRef();

  handleOnChange = (e) => {
    const state = { ...this.state };
    state.value = e.target.value;
    this.debounce(e.target.value);
    this.setState(state);
  };

  debounce = (value) => {
    clearTimeout(this.debounceID.current);
    this.debounceID.current = setTimeout(() => {
      const state = { ...this.state };
      const { error } = this.validate(value);
      state.error = value && error ? error.message : "";
      this.setState(state);
    }, 600);
  };

  validate = (value) => {
    const schema = Joi.object({
      password: Joi.string()
        .pattern(
          new RegExp(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/
          )
        )
        .error(
          new Error(
            "Password should contain lowercase, uppercase, number, and a symbol"
          )
        )
        .required(),
    });

    return schema.validate({ password: value });
  };

  render() {
    return (
      <div className={this.getBoxStyle()}>
        <input
          id={this.props.name}
          type={this.props.type}
          className={this.getInputStyle()}
          value={this.state.value}
          autoComplete="off"
          onChange={this.handleOnChange}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
        />
        <span className={this.getPlaceHolderStyle()}>
          {this.state.error ? this.state.error : this.props.text}
        </span>
        <label
          htmlFor={this.props.name}
          className="absolute top-50 left-100 translate-y-3 -translate-x-7"
        >
          {this.props.icon}
        </label>
      </div>
    );
  }
}

export default Password;
