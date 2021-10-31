import { Component } from 'react';
import getRepositories from '../../api/search-repos/get';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.label = props.label;
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const opts = {
      word: this.state.value
    };

    getRepositories(opts);
  }

  render() {
    return (
      <div>
        <label>
          {this.label}
          <br></br>
          <input type="text" value={this.state.value} onChange={this.handleChange} required/>
        </label>
        <button className="" onClick={this.handleSubmit}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchInput;

