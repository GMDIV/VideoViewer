import React from 'react';

//the individual item that we see multiple times through the mapping that happens in video_list.js
//It takes in the props of video and onVideoSelect that it gets from video_list.js.
const VideoListItem = ({video, onVideoSelect}) => {
	//imageUrl uses .snippet.thumbnails.default.url as the general path to find the image url for the video
	const imageUrl = video.snippet.thumbnails.default.url;
	//This returns a clickable list item that will upon click make itself the selected main video.
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className = "video-list media">
				<div className = "media-left">
					<img className = "media-object" src={imageUrl} />
				</div>
		   		<div className = "media-body">
		   			<div className = "media-heading">{video.snippet.title}</div>
		   		</div>
		   	</div>
		</li>	
	)
};

export default VideoListItem;