import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	 //sets bootstrap column to 4 and gives a list group as well
	 //etag is a property for each of the videos that we get in from the search. It is a long unique identifier hex.
    const videoItems = props.videos.map((video) => {
    	return (
    		<VideoListItem 
    			onVideoSelect={props.onVideoSelect}
    			key={video.etag} 
    			video = {video} />
    	)
    });

	return (
    	<ul className='col-md-4 list-group'>  
            {videoItems}		
    	</ul>

		)
};

export default VideoList;