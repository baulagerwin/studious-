import Joi from "joi";
import Parent from "./Parent";

class Child extends Parent {
  handleOnChange = (e) => {
    const state = { ...this.state };
    const { error } = this.validate(e.target.value);

    if (!e.target.value) state.error = "";
    else
      state.error = error
        ? error.details[0].message.replace(`"firstName" length m`, "M")
        : "";

    state.value = e.target.value;
    this.setState(state);
  };

  validate = (value) => {
    const schema = Joi.object({
      firstName: Joi.string().min(2).max(55).required(),
    });

    return schema.validate({ firstName: value });
  };

  render() {
    return (
      <div className={this.getBoxStyle()}>
        <input
          id={this.props.name}
          type={this.props.type}
          className={this.getInputStyle()}
          value={this.state.value}
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

export default Child;
