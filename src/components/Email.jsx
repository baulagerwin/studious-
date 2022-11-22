import Joi from "joi";
import React, { createRef } from "react";
import TextBox from "./TextBox";

class Email extends TextBox {
  debounceID = createRef();

  handleOnChange = (e) => {
    this.debounce(e);
    this.props.onChange(e);
  };

  debounce = (e) => {
    clearTimeout(this.debounceID.current);
    this.debounceID.current = setTimeout(() => {
      const { error } = this.validate(e.target.value);
      let errorMessage = this.getErrorMessage("Email", e.target.value, error);
      this.props.onChange(e, errorMessage);
    }, 600);
  };

  getErrorMessage = (name, value, error) => {
    let nameInLowerCase = name.toLowerCase();

    return value && error
      ? error.details[0].message.replace(`"${nameInLowerCase}"`, name)
      : "";
  };

  validate = (value) => {
    const schema = Joi.object({
      email: Joi.string()
        .min(2)
        .max(55)
        .email({ tlds: { allow: false } })
        .required(),
    });

    return schema.validate({ email: value });
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

export default Email;
