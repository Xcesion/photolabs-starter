import React from "react";
import "../styles/PhotoDetailsModal.scss";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";

export const PhotoDetailsModal = (props) => {
  const similarPhotos = Object.values(props.photo.similar_photos);


  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal--close-button"
        onClick={() => props.setModalOpen(false)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_428_287)">
            <path
              d="M14.0625 3.9375L3.9375 14.0625"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0625 14.0625L3.9375 3.9375"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton isLiked={props.isLiked} onClick={() => props.onPhotoLike(props.photo.id)} />
        <img
          className="photo-details-modal__image"
          src={props.photo.urls.full}
          onClick={() => props.onPhotoSelected(props.photo.id)}
        />
        <div className="photo-details-modal__header">
          <span>Similar Photos</span>
        </div>
      </div>
      <div>
        <PhotoList photos={similarPhotos} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
