import React from 'react';
import VideoListItem from './video_list_item';

//This is the model for the list of videos that will be shown using video_list_item.
const VideoList = (props) => {
	 //The props.video.map() will take the videos prop from this.state.videos in index.js and for each video in that
	 //array, it will display a div that is created in video_list_item.js with given props. 
    const videoItems = props.videos.map((video) => {
    	return (
    		//onVideoSelect is a prop that is being passed from index.js to video_list.js. Now it is being used as the value 
    		//for a prop of the same name going into video_list_item.js. 
    		//etag is a property for each of the videos that we get in from the search. It is a long unique identifier hex.
    		//The key satifies this error message: "Each child in an array or iterator should have a unique "key" prop."
    		//video is the video within the this.state.video array in index.js.
    		<VideoListItem 
    			onVideoSelect={props.onVideoSelect}
    			key={video.etag} 
    			video = {video} />
    	)
    });
    //Sets bootstrap column to 4 and gives a list group as well
    //now within an unordered list, we display that mapping.
	return (
    	<ul className='col-md-4 list-group'>  
            {videoItems}		
    	</ul>

		)
};

export default VideoList;