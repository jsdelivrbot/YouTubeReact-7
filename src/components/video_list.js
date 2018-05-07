import React from 'react';
import VideListItem from './video_list_item';

const VideoList = (props) => {
   const videoItems = props.videos.map((video) => {
        return (
            <VideListItem 
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;