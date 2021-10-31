import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.onButtonClick();
  }

  render() {
    return (
      <button onClick={this.handleSubmit}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;