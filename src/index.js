import React from 'react';
import ReactDom from 'react-dom';
import YouTubeSearch from 'youtube-api-search';
import _ from 'lodash';

import VideoList from "./components/video_list";
import API_KEY from "../api-key";
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

//The main component
class App extends React.Component {
    constructor(props){
    	super(props);

    	this.state = {
    		videos: [],
    		selectedVideo: null
    	};
    	//this will make it so that there will be an initial search so that it won't 
    	//be hanging on a loading message when you arrive.
    	this.videoSearch('star wars');
    }

    //This is the YouTube api function as per their specifications. The name of it is arbitrary though.
    //It first does a search based on a term while using your api key, and then follows it up with a function.
    //In this case, the function takes the information it recieved and uses it as the videos parameter. 
    //It then uses that parameter to update the this.state.videos and this.state.selectedVideos.
    videoSearch(term) {
    	YouTubeSearch({
	       key: API_KEY,
	       term: term
        },
        (videos) => {
	       this.setState({
	        	videos: videos,
	        	selectedVideo: videos[0]
	       });
        })
    }

    //This is the main render function for the application which uses parts of various components/models.
	render () {
		//This videoSearch will only be able to be run once every 300 milliseconds.
		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 600);

		//The 'videos' will arrive as a prop for the VideoList, set as the this.state.videos from index.js 
		return (	
			<div>
			  <SearchBar onSearchChange= {videoSearch} />
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