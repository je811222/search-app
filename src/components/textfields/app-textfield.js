import { Component } from 'react';
import TextField from '@mui/material/TextField';

class AppTextField extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onInputChange(event.target.value);
  }

  render() {
    const style = {
      margin: "12px"
    };

    return (
      <TextField
        style={style}
        label={this.props.label}
        variant="filled"
        type="text"
        value={this.props.inputValue}
        onChange={this.handleChange}
      />
    );
  }
}

export default AppTextField;

