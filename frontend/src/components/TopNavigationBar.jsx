import React from 'react';

import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({topics, likedPhotos, getPhotosByTopic}) => {
  const isFavePhotoExist = likedPhotos.length > 0;
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