import Joi from "joi";
import React, { createRef } from "react";
import TextBox from "./TextBox";

class Password extends TextBox {
  debounceID = createRef();

  handleOnChange = (e) => {
    this.debounce(e);
    this.props.onChange(e);
  };

  debounce = (e) => {
    clearTimeout(this.debounceID.current);
    this.debounceID.current = setTimeout(() => {
      const { error } = this.validate(e.target.value);
      let errorMessage = this.getErrorMessage(e.target.value, error);
      this.props.onChange(e, errorMessage);
    }, 600);
  };

  getErrorMessage = (value, error) => {
    return value && error ? error.details[0].message : "";
  };

  validate = (value) => {
    const schema = Joi.object({
      password: Joi.string()
        .pattern(
          new RegExp(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/
          )
        )
        .required()
        .messages({
          "string.pattern.base": `Password should contain lowercase, uppercase, number, and a symbol`,
        }),
    });

    return schema.validate({ password: value });
  };

  render() {
    const { name, text, type, value, error, icon } = this.props;

    return (
      <div className={this.getBoxStyle()}>
        <input
          id={name}
          name={name}
          type={type}
          className={this.getInputStyle()}
          value={value}
          autoComplete="off"
          onChange={this.handleOnChange}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
        />
        <span className={this.getPlaceHolderStyle()}>
          {error ? error : text}
        </span>
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

export default Password;
