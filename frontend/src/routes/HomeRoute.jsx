/* eslint-disable no-undef */
import React , {useState} from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {
  
  return (
    <div className="home-route">
      <nav>
        <TopNavigationBar topics={props.topics} likedPhotos ={props.likedPhotos} getPhotosByTopic={props.getPhotosByTopic}/>
      </nav>
      <span className="photo-list" >
        <PhotoList
          onPhotoSelected={props.onPhotoSelected}
          photos={props.photos}
          likedPhotos={props.likedPhotos}
          onPhotoLike={props.handlePhotoLike}
        />
      </span>
    </div>
  );
};

export default HomeRoute;
