import React from 'react';
import ReactDom from 'react-dom';
import YouTubeSearch from 'youtube-api-search';
import VideoList from "./components/video_list";
import API_KEY from "../api-key";
import SearchBar from './components/search_bar';


class App extends React.Component {
    constructor(props){
    	super(props);

    	this.state = {
    		videos: []
    	};

    	YouTubeSearch({
	       key: API_KEY,
	       term: 'stuff'
        },
        (videos) => {
	       this.setState({videos: videos});
        }
)
    }

	render () {
		//the 'videos' will arrive as a prop for the VideoList, set as the this.state.videos from index.js 
		return (	
			<div>
			  <SearchBar />
			  <VideoList videos={this.state.videos}/> 
			</div>
		)
	}
}

ReactDom.render(<App />, document.querySelector('.container'))