import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyD-ju4_Bmat-Lue0UogU7tpPTJ-8Dh2OGM ";


class App extends Component {
  constructor(props) {

    super(props);
    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'sufboards'}, (videos) => {
      this.setState({ videos });
      //this.setState({ videos: videos }); same as videos when same name string
    });
  }

  render(){
  return (
    <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));