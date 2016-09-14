import React from 'react';
import ReactDom from 'react-dom';
import YouTubeSearch from 'youtube-api-search';
import VideoList from "./components/video_list";
import API_KEY from "../api-key";
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';


class App extends React.Component {
    constructor(props){
    	super(props);

    	this.state = {
    		videos: [],
    		selectedVideo: null
    	};

    	YouTubeSearch({
	       key: API_KEY,
	       term: 'star wars'
        },
        (videos) => {
	       this.setState({
	        	videos: videos,
	        	selectedVideo: videos[0]
	       });

        }
)
    }

	render () {
		//the 'videos' will arrive as a prop for the VideoList, set as the this.state.videos from index.js 
		return (	
			<div>
			  <SearchBar />
			  <VideoDetail video= {this.state.selectedVideo} />
			  <VideoList 
			  	onVideoSelect ={selectedVideo => this.setState({selectedVideo}) }
			  	videos={this.state.videos}
			  	/> 
			</div>
		)
	}
}

ReactDom.render(<App />, document.querySelector('.container'))