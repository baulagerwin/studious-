import React from "react";
import Input from "../../elements/Input";
import Label from "../../elements/Label";
import Placeholder from "../../elements/Placeholder";
import TextBox from "./TextBox";

class AuthUsername extends TextBox {
  render() {
    const { id, name, text, type, value, error, icon, onChange } = this.props;

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

export default AuthUsername;
