import { Component } from 'react';
import TextField from '@mui/material/TextField';

class SearchInput extends Component {
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
        label="Search.."
        variant="filled"
        type="text"
        value={this.props.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchInput;

