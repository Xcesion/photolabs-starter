import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "../routes/PhotoDetailsModal";

const PhotoListItem = (props) => {

  const {
    id,
    location,
    imageSource,
    username,
    profile,
    likedPhotos,
    onPhotoLike,
    onPhotoSelected
  } = props;

  // console.log(id);
  const isLiked = likedPhotos?.includes(id);
  // console.log("liked photos:", likedPhotos);

  return (
    <li className="photo-list__item">
      <PhotoFavButton isLiked={isLiked} onClick={() => onPhotoLike(id)} />
      <img
        className="photo-list__image"
        src={imageSource}
        alt={`Photo ${id}`}
        onClick={() => onPhotoSelected(props.id)}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt={`Profile ${username}`}
        />
        <div className="photo-list__text_align">
          <div className="photo-list__user-info">{username}</div>
          <div className="photo-list__user-location">{`${location.city}, ${location.country}`}</div>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;

PhotoListItem.defaultProps = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};
