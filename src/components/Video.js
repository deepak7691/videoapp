import React from 'react';
import { useLocation } from 'react-router-dom';

const Video = () => {
  const location = useLocation();
  const videoData = location.state ? location.state.videoData : null;
  const {  mediaUrl } = videoData.submission;

  return (
    <div className='w-[100%] h-[100vh]'>
      <video controls autoPlay muted className='w-[100%] h-[90vh]'>
        <source src={mediaUrl} type='video/mp4' />
      </video>
    </div>
  );
};

export default Video;
