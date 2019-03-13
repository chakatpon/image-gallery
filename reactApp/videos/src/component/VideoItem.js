import React from 'react';
import './VideoItem.css';


const VideoItem = ({video, onVideoSelect}) => {

    

    return (
        <div onClick={() =>onVideoSelect(video)} className='ui item video-item'>
            <div className='image'>
                <img 
                 alt={video.snippet.title}
                 className='ui image' 
                 src={video.snippet.thumbnails.medium.url} />
            </div>
           
           <div className='content'>
                <div className='header'>{video.snippet.title}</div>
           </div>
        </div>
    );
}

export default VideoItem;