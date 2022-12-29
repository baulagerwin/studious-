import Label from "../../elements/Label";
import Placeholder from "../../elements/Placeholder";
import TextBox from "./TextBox";
import TextArea from "../../elements/TextArea";

class TextPack extends TextBox {
  render() {
    const { id, name, text, type, value, onChange, icon } = this.props;

    return (
      <div className={this.getBoxStyle()}>
        <TextArea
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

export default TextPack;
