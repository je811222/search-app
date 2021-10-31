import { Component } from 'react';

import getSearchedRepositories from '../../api-client/get-search-repos';

import Button from '../buttons/button';
import SearchInput from '../inputs/search-input';

// Task:
// results contain: repoName: '', description: '', stars: 0, language: '', owner: ''
// each result when selected, route to a detailed screen that displays information about the repo

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: '' };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  handleButtonClick(){
    const opts = {
      word: this.state.searchInput
    };

    getSearchedRepositories(opts);
  }

  handleSearchInputChange(value) {
    this.setState({ searchInput: value });
  }

  render() {
    return (
      <div>
        <label>Search Github Repositories</label>
        <br></br>
        <SearchInput
          value={this.state.searchInput}
          onInputChange={this.handleSearchInputChange}
        ></SearchInput>
        <Button
          label="Search"
          onButtonClick={this.handleButtonClick}
        ></Button>
      </div>
    );
  }
}

export default MainPage;