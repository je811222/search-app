import { Component } from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

class AppSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSelectChange(event.target.value);
  }

  render() {
    const style = {
      margin: "12px"
    };

    return (
      <FormControl sx={{ minWidth: 100 }} style={style}>
        <InputLabel id={this.props.label}>{this.props.label}</InputLabel>
        <Select
          id={this.props.id}
          value={this.props.selectValue}
          label={this.props.label}
          onChange={this.handleChange}
        >
          {this.props.items.map(item => (<MenuItem key={item} value={item}>{item}</MenuItem>))}
        </Select>
      </FormControl>
    );
  }
}

export default AppSelect;

