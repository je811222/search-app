import { Component } from 'react';
import Alert from '@mui/material/Alert';

import getSearchedRepositories from '../../api-client/get-search-repos';
import { formatSearchResults } from '../../formatters/format-search-result';

import AppButton from '../buttons/app-button';
import SearchInput from '../inputs/search-input';
import AppTable from '../tables/app-table';

// Task:
// results contain: repoName: '', description: '', stars: 0, language: '', owner: ''
// each result when selected, route to a detailed screen that displays information about the repo
const TABLE_CONFIG = [
  {
    name: 'name',
    label: 'Name'
  },
  {
    name: 'description',
    label: 'Description',
  },
  {
    name: 'stars',
    label: 'Stars'
  },
  {
    name: 'language',
    label: 'Language'
  },
  {
    name: 'ownerName',
    label: 'Owner'
  },
  {
    name: 'url',
    label: 'Detailed'
  }
];

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '', error: '', data: [] };
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
      this.setState({ error: 'No results found. Please enter a new search' });
    }

    this.setState({ data: formattedResults });
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
        {this.state.data.length > 1 ? <AppTable data={this.state.data} config={TABLE_CONFIG}></AppTable> : ''}
      </div>
    );
  }
}

export default MainPage;