import Joi from "joi";
import React, { createRef } from "react";
import Input from "../../elements/Input";
import Label from "../../elements/Label";
import Placeholder from "../../elements/Placeholder";
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
    const { id, name, text, type, value, error, icon } = this.props;

    return (
      <div className={this.getBoxStyle()}>
        <Input
          id={id}
          name={name}
          type={type}
          className={this.getInputStyle()}
          value={value}
          onChange={this.handleOnChange}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
        />
        <Placeholder
          className={this.getPlaceHolderStyle()}
          text={text}
          error={error}
        />
        <Label
          id={id}
          className={this.getLabelStyle()}
          icon={icon}
          error={error}
        />
      </div>
    );
  }
}

export default Password;
