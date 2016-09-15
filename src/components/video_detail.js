import React from 'react';

//This is a model which displays the video, along with title and description.
//The video prop is taken from index.js as the this.state.selectedVideo.
const VideoDetail = ({video}) => {
	//If there is no selected video to be found, instead display "Loading the videos...""
	if (!video) {
		return <div>Loading the videos... </div>
	}

	//Here we set up the url to be later used as the sources in the iframe which displays
	//the video. It takes the .id.videoId value of the selectedVideo and then puts that at 
	//the end of the url to complete the video link.
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	//Here we return the div for the video, which includes the video iframe div displaying
	//the video, as well as a div giving the title and description.
	return (
		<div className = "video-detail col-mid-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;