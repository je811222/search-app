import { Component } from 'react';
import Alert from '@mui/material/Alert';

import getSearchedRepositories from '../../api-client/get-search-repos';
import { formatSearchResults } from '../../formatters/format-search-result';

import AppButton from '../buttons/app-button';
import AppSelect from '../selects/app-selects';
import AppTable from '../tables/app-table';
import AppTextField from '../textfields/app-textfield';

const SORT_ITEMS = ['best-match', 'stars'];

const TABLE_CONFIG = [
  {
    id: 'name',
    label: 'Name'
  },
  {
    id: 'description',
    label: 'Description',
  },
  {
    id: 'stars',
    label: 'Stars'
  },
  {
    id: 'language',
    label: 'Language'
  },
  {
    id: 'ownerName',
    label: 'Owner'
  }
];

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '', langauge: '', sort: '', error: '', data: [] };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleTableRowClick = this.handleTableRowClick.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleLanguageInputChange = this.handleLanguageInputChange.bind(this);
  }

  async handleButtonClick(){
    this.setState({ error: '' });

    const opts = {
      word: this.state.searchText,
      language: this.state.language,
      sort: this.state.sort
    };

    if (!opts.word) {
      this.setState({ error: 'Input is required for the search' });
    }

    const { data } = await getSearchedRepositories(opts);
    const formattedResults = formatSearchResults(data.items);

    if(formattedResults.length < 1) {
      this.setState({ error: 'No results found. Please enter a new search' });
    }

    this.setState({ data: formattedResults });
  }

  handleTableRowClick(row) {
    window.location.href = `${row.url}`;
  }

  handleSelectChange(value) {
    this.setState({ sort: value, error: '' });
  }

  handleSearchInputChange(value) {
    this.setState({ searchText: value, error: '' });
  }

  handleLanguageInputChange(value) {
    this.setState({ language: value, error: '' });
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
      flexDirection: this.props.smallScreen ? "column" : "row",
      justifyContent: "center"
    };

    return (
      <div>
        <label style={labelStyle}>Search Github Repositories</label>
        <br></br>
        <div style={container}>
          <AppTextField
            id="search-field"
            label="Search.."
            inputValue={this.state.searchText}
            onInputChange={this.handleSearchInputChange}
          ></AppTextField>

          <AppTextField
            id="language-field"
            label="Language"
            inputValue={this.state.language}
            onInputChange={this.handleLanguageInputChange}
          ></AppTextField>

          <AppSelect
            id="sort-select"
            label="Sort"
            items={SORT_ITEMS}
            selectValue={this.state.sort}
            onSelectChange={this.handleSelectChange}
          ></AppSelect>

          <AppButton
            id="search-button"
            label="Search"
            onButtonClick={this.handleButtonClick}
          ></AppButton>
        </div>

        {this.state.error ? this.displayErrorMessage() : ''}
        {this.state.data.length > 1 ?
          <AppTable
            id="result-table"
            data={this.state.data}
            config={TABLE_CONFIG}
            onRowClick={this.handleTableRowClick}
          ></AppTable>
          : ''
        }
      </div>
    );
  }
}

export default MainPage;