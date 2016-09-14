import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	 //sets bootstrap column to 4 and gives a list group as well
    const videoItems = props.videos.map((video) => {
    	return <VideoListItem video = {video} />
    });

	return (
    	<ul className='col-md-4 list-group'>  
            {videoItems}		
    	</ul>

		)
};

export default VideoList;