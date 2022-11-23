import React from "react";
import TextBox from "./TextBox";

class AuthUsername extends TextBox {
  render() {
    const { name, text, type, value, error, icon, onChange } = this.props;

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

export default AuthUsername;
