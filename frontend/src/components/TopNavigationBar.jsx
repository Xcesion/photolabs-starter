import React from 'react';

import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({topics, likedPhotos}) => {
  const isFavePhotoExist = likedPhotos.length > 0;
  return (
    <div className="top-nav-bar">
      
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-space">
        <TopicList topics = {topics} />
        <FavBadge likedPhotos = {likedPhotos.length} isFavPhotoExist={isFavePhotoExist}/>
      </div>
    </div>
  );
};

export default TopNavigation;