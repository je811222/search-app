import { Component } from 'react';
import Alert from '@mui/material/Alert';

import getSearchedRepositories from '../../api-client/get-search-repos';
import { formatSearchResults } from '../../formatters/format-search-result';

import AppButton from '../buttons/app-button';
import SearchInput from '../inputs/search-input';

// Task:
// results contain: repoName: '', description: '', stars: 0, language: '', owner: ''
// each result when selected, route to a detailed screen that displays information about the repo

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '', error: '' };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  async handleButtonClick(){
    const opts = {
      word: this.state.searchText
    };

    if (!opts.word) {
      this.setState({ error: 'Input is required for the search' });
    }

    const { data } = await getSearchedRepositories(opts);
    const formattedResults = formatSearchResults(data.items);
    console.log('formattedResults', formattedResults);

    if(formattedResults.length < 1) {
      this.setState({ error: 'No results found. Please enter a new search' })
    }

    // send formattedResults to Table
  }

  handleSearchInputChange(value) {
    this.setState({ searchText: value, error: '' });
  }

  displayErrorMessage() {
    return (
      <Alert severity="error" sx={{ width: '100%' }}>
        {this.state.error}
      </Alert>
    );
  }

  render() {
    const labelStyle = {
      fontSize: "20px",
      margin: "12px"
    };

    const container = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };

    return (
      <div>
        <label style={labelStyle}>Search Github Repositories</label>
        <br></br>
        <div style={container}>
          <SearchInput
            value={this.state.searchText}
            onInputChange={this.handleSearchInputChange}
          ></SearchInput>
          <AppButton
            label="Search"
            onButtonClick={this.handleButtonClick}
          ></AppButton>
        </div>
        {this.state.error ? this.displayErrorMessage() : ''}
      </div>
    );
  }
}

export default MainPage;