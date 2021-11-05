import { Component } from "react";
import Button from '@mui/material/Button';

class AppButton extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.onButtonClick();
  }

  render() {
    const style = {
      margin: "12px"
    };

    return (
      <Button
        id={this.props.id}
        style={style}
        variant="contained"
        onClick={this.handleSubmit}
      >
        {this.props.label}
      </Button>
    );
  }
}

export default AppButton;