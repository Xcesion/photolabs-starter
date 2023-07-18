import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({isLiked, onClick}) => {

  
  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <div className="photo-list__fav-icon-svg">

        <FavIcon fill = {isLiked ? "red" : "#EEEEEE"}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;