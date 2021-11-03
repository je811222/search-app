import { Component } from 'react';

import getSearchedRepositories from '../../api-client/get-search-repos';
import { formatSearchResults } from '../../formatters/format-search-result';

import Button from '../buttons/button';
import SearchInput from '../inputs/search-input';

// Task:
// results contain: repoName: '', description: '', stars: 0, language: '', owner: ''
// each result when selected, route to a detailed screen that displays information about the repo

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  async handleButtonClick(){
    const opts = {
      word: this.state.searchText
    };

    const { data } = await getSearchedRepositories(opts);
    const formattedResults = formatSearchResults(data.items);
    console.log('formattedResults', formattedResults);

    if(formattedResults.length < 1) throw 'No results found. Please enter a new search.'; // TODO

    // send formattedResults to Table
  }

  handleSearchInputChange(value) {
    this.setState({ searchText: value });
  }

  render() {
    const labelStyle = {
      fontSize: "20px",
    };

    return (
      <div>
        <label style={labelStyle}>Search Github Repositories</label>
        <br></br>
        <SearchInput
          value={this.state.searchText}
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