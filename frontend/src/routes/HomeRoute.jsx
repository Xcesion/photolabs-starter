/* eslint-disable no-undef */
import React , {useState} from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  const handlePhotoLike = (photoId) => {
    if (likedPhotos.includes(photoId)) {
      setLikedPhotos(likedPhotos.filter((id) => id !== photoId));
    } else {
      setLikedPhotos([...likedPhotos, photoId]);
    }
  };

  return (
    <div className="home-route">
      <nav>
        <TopNavigationBar topics={props.topics} likedPhotos ={likedPhotos} getPhotosByTopic={props.getPhotosByTopic}/>
      </nav>
      <span className="photo-list" >
        <PhotoList
          onPhotoSelected={props.onPhotoSelected}
          photos={props.photos}
          likedPhotos={likedPhotos}
          onPhotoLike={handlePhotoLike}
        />
      </span>
    </div>
  );
};

export default HomeRoute;
