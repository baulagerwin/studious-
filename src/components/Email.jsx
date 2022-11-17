import Joi from "joi";
import React, { createRef } from "react";
import TextBox from "./TextBox";

class Email extends TextBox {
  debounceID = createRef();

  handleOnChange = (e) => {
    const state = { ...this.state };
    state.value = e.target.value;
    this.debounce("Email", e.target.value);
    this.setState(state);
  };

  debounce = (name, value) => {
    clearTimeout(this.debounceID.current);
    this.debounceID.current = setTimeout(() => {
      const state = { ...this.state };
      const { error } = this.validate(value);
      state.error =
        value && error
          ? (state.error = error.details[0].message.replace(
              `"${name.toLowerCase()}"`,
              name
            ))
          : "";
      this.setState(state);
    }, 600);
  };

  validate = (value) => {
    const schema = Joi.object({
      email: Joi.string().min(2).max(55).email({ tlds: { allow: false } }).required(),
    });

    return schema.validate({ email: value });
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

export default Email;
