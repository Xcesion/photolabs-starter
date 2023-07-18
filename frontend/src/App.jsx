import React, { useEffect, useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";



const App = () =>{
  const { selectPhoto, closeModal, getPhotosByTopic,state } = useApplicationData();
  
  const [likedPhotos, setLikedPhotos] = useState([]);
  const handlePhotoLike = (photoId) => {
    if (likedPhotos.includes(photoId)) {
      setLikedPhotos(likedPhotos.filter((id) => id !== photoId));
    } else {
      setLikedPhotos([...likedPhotos, photoId]);
    }
  };

  const isLiked = likedPhotos.includes(state.selectedPhoto.id);

  return (
    <div className="App">
      <HomeRoute
        photos={state.photos}
        topics={state.topics}
        onPhotoSelected={selectPhoto}
        getPhotosByTopic = {getPhotosByTopic}
        likedPhotos = {likedPhotos}
        handlePhotoLike = {handlePhotoLike}
      />
      {state.isModalOpen && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          photos={state.photos}
          onPhotoSelected={selectPhoto}
          setModalOpen={closeModal}
          likedPhotos = {likedPhotos}
          onPhotoLike = {handlePhotoLike}
          isLiked = {isLiked}
        />
      )}
    </div>
  );
};


export default App;