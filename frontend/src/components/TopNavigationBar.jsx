import React from 'react';

import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({topics, likedPhotos, getPhotosByTopic}) => {
  const isFavePhotoExist = likedPhotos.length > 0;
  // // Define the handleClick function in the TopNavigation component
  // const handleClick = async(id) => {
  //   try {
  //     // Make a GET request to the specified API endpoint
  //     const response = await fetch(`/api/topic/photos/${id}`);
  //     const data = await response.json();
  //     // Do something with the response data (optional)
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  return (
    <div className="top-nav-bar">
      
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-space">
        <TopicList topics = {topics} getPhotosByTopic={getPhotosByTopic}/>
        <FavBadge likedPhotos = {likedPhotos.length} isFavPhotoExist={isFavePhotoExist}/>
      </div>
    </div>
  );
};

export default TopNavigation;