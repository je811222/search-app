import { Component } from 'react';

import SearchInput from '../input/search-input';

// Task:
// results contain: repoName: '', description: '', numOfStars: 0, language: '', ownerName: ''
// each result when selected, route to a detailed screen that displays information about the repo

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  render() {
    return (
      <div>
        <SearchInput label="Search Github Repositories"></SearchInput>
      </div>
    );
  }
}

export default MainPage;