import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyD-ju4_Bmat-Lue0UogU7tpPTJ-8Dh2OGM ";


class App extends Component {
  constructor(props) {

    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
      //this.setState({ videos: videos }); same as videos when same name string
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail  video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect ={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
      );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));